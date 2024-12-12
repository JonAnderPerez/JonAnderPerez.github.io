interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "Mi idioma natal, hablo y escribo con fluidez",
        show: true
    },
    {
        name: "Euskera",
        level: "B1",
        description: "Hablo y escribo con cierta fluidez",
        show: true
    },
    {
        name: "Inglés",
        level: "B1",
        description: "Lo entiento escrita y habladamente, pero me cuesta expresarme",
        show: true
    },
];

export default languages;