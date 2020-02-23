import Link from "next/link";

const docsList = [
    {
        title: 'PROJECT_PROPOSAL.docx',
        link: '/docs/PROJECT_PROPOSAL.docx'
    },
    {
        title: 'REQUIREMENTS.docx',
        link: '/docs/REQUIREMENTS.docx'
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
];

const Doc = ({ data: { title, link } }) => (
    <div className="doc">
        <Link href={link}><a target="_blank">{title}</a></Link>
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