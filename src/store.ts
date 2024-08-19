import { reactive } from "vue";

export interface BillItem {
  id: string;
  name: string;
  price: number;
}
interface Bill {
  id: string;
  name: string;
  items: BillItem[];
}

export const store = reactive({
  bills: <Bill[]>[
    {
      id: crypto.randomUUID(),
      name: "Jose",
      items: [
        {
          id: crypto.randomUUID(),
          name: "Perro",
          price: 3000,
        },
        {
          id: crypto.randomUUID(),
          name: "coca",
          price: 2000,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Jessica",
      items: [
        {
          id: crypto.randomUUID(),
          name: "papas",
          price: 3000,
        },
        {
          id: crypto.randomUUID(),
          name: "pepsi",
          price: 4000,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Alguien",
      items: [
        {
          id: crypto.randomUUID(),
          name: "pizza",
          price: 1000,
        },
        {
          id: crypto.randomUUID(),
          name: "agua",
          price: 2000,
        },
      ],
    },
  ],
});
