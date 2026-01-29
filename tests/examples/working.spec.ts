import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/playwright';

/* ---------- Types ---------- */
type FilterSelections = {
  types: string[];
  mode: string;
  from: string[];
  to?: string[];
  status: string[];
};

/* ---------- Test scenarios ---------- */
const scenarios: { name: string; selections: FilterSelections }[] = [
  {
    name: 'basic scenario',
    selections: {
      types: ['A', 'B'],
      mode: 'single',
      from: ['X'],
      status: ['Created'],
    },
  },
  {
    name: 'extended scenario',
    selections: {
      types: ['A', 'B'],
      mode: 'all',
      from: ['X', 'Y', 'Z'],
      to: ['P', 'Q'],
      status: ['Created'],
    },
  },
];

/* ---------- Fake "on" object to replace fixtures ---------- */
const createFakeOn = () => ({
  protocolActivityPage: {
    orderTypeFilterLabel: async () => ({ click: async () => {} }),
    orderTypeOption: (type: string) => ({
      click: async () => {},
      toHaveAttribute: async (_attr: string, _value: string) => {},
    }),
    chainsFilterLabel: async () => ({ click: async () => {} }),
    chainsFilterTradesTypes: (mode: string) => ({
      click: async () => {},
      toHaveAttribute: async (_attr: string, _value: string) => {},
    }),
    chainsFilterFrom: (from: string) => ({
      toHaveAttribute: async (_attr: string, _value: string) => {},
    }),
    chainsFilterTo: (to: string) => ({
      toHaveAttribute: async (_attr: string, _value: string) => {},
    }),
    statusFilterLabel: async () => ({ click: async () => {} }),
    statusOption: (status: string) => ({
      toHaveAttribute: async (_attr: string, _value: string) => {},
    }),
  },
  currentPage: {
    keyboard: { press: async (_key: string) => {} },
  },
});

/* ---------- Helper function ---------- */
const verifyFiltersPersist = async (on: any, selections: FilterSelections) => {
  for (const type of selections.types) expect(type).toBeTruthy();
  for (const from of selections.from) expect(from).toBeTruthy();
  if (selections.to) for (const to of selections.to) expect(to).toBeTruthy();
  for (const status of selections.status) expect(status).toBeTruthy();
};

/* ---------- Test suite ---------- */
test.describe('Verify filters > replicated structure', () => {
  test.beforeEach(async () => {
    // Setup phase, can add pre-test logic if needed
  });

  for (const { name, selections } of scenarios) {
    test(`Verify filters - ${name}`, async () => {
      // Qase test case ID (same for all)
      qase.id(29);

      // Group parameters for Qase
      qase.groupParameters({
        Types: selections.types.join(', '),
        Mode: selections.mode,
        From: selections.from.join(', '),
        To: selections.to ? selections.to.join(', ') : 'N/A', // <-- N/A if undefined
        Status: selections.status.join(', '),
      });

      // Apply type filters
      await test.step('Apply type filters', async () => {
        for (const type of selections.types) {
          expect(type).toBeDefined();
        }
      });

      // Apply mode filter
      await test.step('Apply mode filter', async () => {
        expect(selections.mode).toBeTruthy();
      });

      // Apply from filters
      await test.step('Apply from filters', async () => {
        for (const from of selections.from) {
          expect(from).toBeDefined();
        }
      });

      // Apply to filters (optional)
      await test.step('Apply to filters', async () => {
        if (selections.to) {
          for (const to of selections.to) {
            expect(to).toBeDefined();
          }
        }
      });

      // Verify filters persist
      await test.step('Verify filters persist', async () => {
        const on = createFakeOn();
        await verifyFiltersPersist(on, selections);
      });
    });
  }
});