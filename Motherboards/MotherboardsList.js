const MotherboardProduct = [
    {
        id: 1,
        ProductImage: "Images/Asus Rog Maximus Hero Z790.jpg",
        ProductName: "ASUS ROG Maximus Z790 Hero",
        ProductDescription: "(WiFi 6E) LGA 1700(Intel 14th & 13th&12th Gen) ATX gaming motherboard(PCIe 5.0,DDR5,20+1power stages,2.5Gb LAN, Bluetooth V5.2,2x Thunderbolt 4 ports,5xM.2/NVMe SSD,Thunderbolt 4 USB Type-C",
        ProductPrice: 2746.60
    },
    {
        id: 2,
        ProductImage: "Images/Asus Rog Maximus Dark Hero Z790.png",
        ProductName: "ASUS ROG Maximus Z790 Dark Hero",
        ProductDescription: "(WiFi 7) LGA 1700(14th,13th,12th Gen) DDR5 ATX gaming motherboard(PCIe 5.0x16 with Q release, five M.2 slots,20+1+2 power stages,2x Thunderbolt 4 ports",
        ProductPrice: 2776.76
    },
    {
        id: 3,
        ProductImage: "Images/Asus Rog Strix Z790-A White.png",
        ProductName: "ASUS ROG Strix Z790-A Gaming WiFi II",
        ProductDescription: "(WiFI 7) LGA 1700(Intel 14th,13th & 12th Gen) ATX gaming motherboard(16 + 1+2 power stages, DDR5, 5X M.2 slots,",
        ProductPrice: 1567.35
    },
    {
        id: 4,
        ProductImage: "Images/ASUS ROG Strix Z790-F Gaming.jpg",
        ProductName: "ASUS ROG Strix Z790-F Gaming",
        ProductDescription: "WiFi 6E LGA 1700(Intel 14th&13th &12th Gen) ATX gaming motherboard(16 + 1 power stages,DDR5,four M.2 slots, PCIe 5.0,WiFi 6E,USB 3.2 Gen 2x2 Type-C® with PD 3.0 up to 30W",
        ProductPrice: 1631.77
    },
    {
        id: 5,
        ProductImage: "Images/ASUS ROG STRIX B650-A GAMING.jpg",
        ProductName: "ASUS ROG Strix B650-A Gaming",
        ProductDescription: "WiFi AMD B650 AM5 Ryzen™ Desktop 9000 8000 & 7000 ATX motherboard, 12 + 2 power stages, DDR5, 3x M.2 slot, PCIe® 4.0, 2.5G LAN, WiFi 6E, USB 3.2 Gen 2x2 Type-C®, Aura Sync",
        ProductPrice: 1069.49
    },
    {
        id: 6,
        ProductImage: "Images/ASUS ROG STRIX B650E-E GAMING.jpg",
        ProductName: "ASUS ROG Strix B650E-E Gaming",
        ProductDescription: "WiFi AMD B650 AM5 Ryzen™ Desktop 9000 8000 & 7000 ATX motherboard, 16+2 power stages, DDR5, 3x M.2 slot, PCIe® 5.0, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2 Type-C®, Aura Sync)",
        ProductPrice: 1442.09
    },
    {
        id: 7,
        ProductImage: "Images/ASUS ROG STRIX X670E-A GAMING.jpg",
        ProductName: "ASUS ROG Strix X670E-A Gaming",
        ProductDescription: "WIFI AMD X670 AM5 Ryzen Desktop 9000 8000 & 7000 ATX motherboard, 16+2 power stages, PCIe 5.0, DDR5, 4x M.2 slots with heatsink, USB 3.2 Gen 2x2, WiFi 6E, AI Cooling II",
        ProductPrice: 1627.24
    },
    {
        id: 8,
        ProductImage: "Images/ASUS ROG Strix Z790-E Gaming.png",
        ProductName: "ASUS ROG Strix Z790-E Gaming",
        ProductDescription: "WiFi II LGA 1700(Intel 14th, Intel 13th & 12th Gen) DDR5 ATX gaming motherboard(PCIe 5.0 NVMe SSD slot with M.2 Combo-Sink,18+1+2 ower stages,2.5 Gb LAN",
        ProductPrice: 2092.78
    },
    {
        id: 9,
        ProductImage: "Images/MSI PRO Z790-A MAX.png",
        ProductName: "MSI PRO Z790-A MAX",
        ProductDescription: "WIFI LGA 1700 Intel Z790 SATA 6Gb/s ATX Motherboard",
        ProductPrice: 1169.49,
    },
    {
        id: 10,
        ProductImage: "Images/GIGABYTE Z790M AORUS ELITE AX ICE.png",
        ProductName: "GIGABYTE Z790M AORUS ELITE AX ICE",
        ProductDescription: "LGA 1700 Intel Z790 M-ATX Motherboard with DDR5, Triple M.2, PCIe 5.0, USB 3.2 Gen2X2 Type-C, Intel Wi-Fi 6E, 2.5GbE LAN, Q-Flash Plus, EZ-Latch Plus",
        ProductPrice: 1030.34,
    },
    {
        id: 11,
        ProductImage: "Images/ASRock Z790 Lightning WiFi.png",
        ProductName: "ASRock Z790 Lightning WiFi",
        ProductDescription: "LGA 1700(14th,13th,12th Gen) Intel Z790 SATA 6Gb/s ATX DDR5 1 PCIe 5.0 x16 2.5G LAN WiFi 6E + Bluetooth Motherboards",
        ProductPrice: 937.19,
    },
];
const Categories = [...new Set(MotherboardProduct.map((item)=>
    {return item}))]
document.getElementById("MotherboardRoot").innerHTML = Categories.map((item)=>
{
    var {ProductImage, ProductName, ProductDescription, ProductPrice} = item;
    return(
        `<div class="ProductCard">
            <button id="PBTN">
                <a>
                    <img src="${ProductImage}" align="left"></img>
                    <h3>${ProductName}</h3>
                    <h4>${ProductDescription}</h4>
                    <h2 class="ProductPrice">${ProductPrice} SR</h2>`+
                    "<button id='ATCBTN' onclick='addtocart()'>Add to Cart</button>"+
                `</a>
            </button>
        </div>`
    )
}).join('');