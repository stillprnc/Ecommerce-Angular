export const filters = [
    {
        id:"color",
        name:"Color",
        options: [
          { value: "white", label: "White" },
          { value: "black", label: "Black" },
          { value: "red", label: "Red" },
          { value: "blue", label: "Blue" },
          { value: "green", label: "Green" },
          { value: "yellow", label: "Yellow" },
          { value: "orange", label: "Orange" },
          { value: "purple", label: "Purple" }
        ]
    },
    {
        id:"size",
        name:"Size",
        options: [
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"}
        ]
    }
];

export const singleFilter = [
    {
        id:"price",
        name:"Price",
        options: [
          { value: "159-399", label: "₹159 To ₹399" },
          { value: "400-799", label: "₹400 To ₹799" },
          { value: "800-1199", label: "₹800 To ₹1199" },
          { value: "1200-1999", label: "₹1200 To ₹1999" },
          { value: "2000-4999", label: "₹2000 To ₹4999" }
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options: [
          { value: "10", label: "10% And Above" },
          { value: "20", label: "20% And Above" },
          { value: "30", label: "30% And Above" },
          { value: "40", label: "40% And Above" },
          { value: "50", label: "50% And Above" },
          { value: "60", label: "60% And Above" },
          { value: "70", label: "70% And Above" },
          { value: "80", label: "80% And Above" }
        ]
    },
    {
        id:"stock",
        name:"Availability",
        options: [
          { value: "in_stock", label: "In Stock" },
          { value: "out_of_stock", label: "Out Of Stock" }
        ]
    }
]