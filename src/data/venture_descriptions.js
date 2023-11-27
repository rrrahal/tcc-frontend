export const venture1 = `Green Oasis Energy Solutions is a sustainable energy startup dedicated to harnessing solar power. Our cutting-edge solar panel technology not only generates clean and renewable energy but also contributes to a reduction in carbon emissions.By promoting the adoption of solar energy solutions, we aim to pave the way for a greener and more sustainable future.
`;

export const venture2 = `Centennial Ventures is a venture capital firm investing in network companies and related enabling software and technology enterprises, with the potential to be market leaders. Their investment focus is on early and later-stage opportunities. Centennial Ventures VII, a $341 million partnership, is their most recent fund being invested.`;

export const venture3 = `Quantum Dynamics Computing is at the forefront of quantum computing technology, pushing the boundaries of computational power. While our focus is on advancing computing capabilities, the energy-intensive nature of quantum computing raises environmental concerns. We recognize the need for sustainability and are actively exploring ways to minimize our carbon footprint and make quantum computing more eco-friendly.
`;


const examples = [
    "Global Innovations Tech is a leading IT consulting firm specializing in developing advanced software solutions for businesses. With a focus on cutting-edge technologies, they provide innovative software services to optimize operational efficiency.",
    
    "BlueSky Logistics is a transportation and logistics company leveraging state-of-the-art tracking systems and analytics for efficient supply chain management. Their commitment to streamlined logistics ensures timely deliveries and reduces overall transportation costs.",
    
    "Sunset Fashion Retail is a multinational retail giant known for its extensive chain of fashion stores. Their business model emphasizes the latest trends and customer preferences, driving growth in the competitive fashion retail market.",
    
    "TechWare Solutions is a software development company that creates custom applications for diverse industries. Their expertise lies in crafting scalable and efficient software solutions to meet the unique needs of each client.",
    
    "Infinite Connections Telecom is a telecommunications provider focusing on expanding network infrastructure for enhanced connectivity. Their efforts contribute to the evolution of communication technology, supporting global connectivity.",
    
    "EcoHarmony Agriculture is a sustainable farming initiative committed to organic and eco-friendly farming practices. They prioritize soil health and biodiversity, contributing to a healthier environment and promoting sustainable food production.",
    
    "CleanTech Innovations is a startup dedicated to developing innovative solutions for waste management. Their technology transforms waste into valuable resources, reducing environmental impact and promoting a circular economy.",
    
    "Renewable Power Dynamics specializes in harnessing wind energy to generate clean electricity. Their wind farm projects contribute to the transition to renewable energy sources, addressing climate change and promoting sustainability.",
    
    "GreenBuilders Eco-Constructions is a construction company focused on sustainable building practices. They use eco-friendly materials and design principles to create energy-efficient and environmentally conscious structures.",
    "OceanGuardians Conservation Society is a non-profit organization dedicated to preserving marine ecosystems. Through research and conservation efforts, they work towards protecting marine life and promoting sustainable practices for ocean health."
  ];

export const random_example = () => {
    const randomIndex = Math.floor(Math.random() * examples.length);
    return examples[randomIndex];
}