import { reactive } from "vue";

export interface BillItem {
  id: string;
  name: string;
  price: number;
}
export interface Bill {
  id: string;
  name: string;
  items: BillItem[] | null;
}

export const store = reactive({
  bills: <Bill[]>[],
  tax: 8,
  tip: 15,
});
