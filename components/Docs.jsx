import Link from "next/link";

const docsList = [
    {
        title: 'Project Proposal',
        link: 'https://docs.google.com/document/d/13Z3QrJnA0nIhGTvRGue-pMXXw6Z9Tx0jXYhen89Tdyo/edit?usp=sharing'
    },
    {
        title: 'Requirements',
        link: 'https://docs.google.com/document/d/1FMrpzXLysBIY7MgRE39SguvX1DyYUzK-R6lsYxSFjjE/edit?usp=sharing'
    },
    {
        title: 'Time Log',
        link: 'https://docs.google.com/spreadsheets/d/1cHifL_P5H0AgzMSFhCGFmf8viELiYQGyUncSvkha6pc/edit?usp=sharing'
    },
    {
        title: 'Diary',
        link: 'https://docs.google.com/spreadsheets/d/1I5HXig65wJlK1K8PbkT5RKJOwaExf5gDCUZlLxlA8Vw/edit?usp=sharing'
    },
    {
        title: 'Marks',
        link: 'https://docs.google.com/spreadsheets/d/1Y1dC22YC3uwk_8uPd2VcIyFUag6Wh3JXdmI9oLZCcZU/edit?usp=sharing'
    },
    {
        title: 'Assessment Criteria',
        link: 'https://docs.google.com/document/d/1HcxMClwVgkiENvhIuFSQKsW-Yxw-bxtFyl5Xtb-aUro/edit?usp=sharing'
    },
    {
        title: 'UML Use Case',
        link: 'https://drive.google.com/file/d/1csonYhBvyz8ossSvjPJwmLzsTbSFD2sa/view?usp=sharing'
    },
    {
        title: 'Design',
        link: 'https://drive.google.com/drive/folders/1bi2OUNKML5ufAbJNPGnHX11bV643GHaU?usp=sharing'
    },
    {
        title: 'Documentation Part 1',
        link: 'https://drive.google.com/file/d/1iw6dfaam29nkuoxh6Z4zUKTU5MVS7DKj/view?usp=sharing'
    },
    {
        title: 'Presentation: Software Testing',
        link: 'https://youtu.be/LnXfyh4cKv0'
    },
    {
        title: 'Final Presentation LML: Live Music Library',
        link: 'https://youtu.be/PiE9F9ThPrY'
    },
    {
        title: 'Final Documentation',
        link: 'https://drive.google.com/file/d/1COM9hjEbYvKF4NtxpHZEbVBL2xDWm5Hz/view?usp=sharing'
    },
];

const Doc = ({ data: { title, link } }) => (
    <div className="doc">
        <a href={link} target="_blank">{title}</a>
    </div>
);

const Docs = () => (
    <section className="docs">
        <h2 className="docs-title section-title">
            Documents
        </h2>
        <div className="docs-list">
            {docsList.map(doc => <Doc key={doc.title} data={doc} />)}
        </div>
    </section>
);

export default Docs;