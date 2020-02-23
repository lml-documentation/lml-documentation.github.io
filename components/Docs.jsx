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
];

const Doc = ({ data: { title, link } }) => (
    <div className="doc">
        <Link href={link}><a>{title}</a></Link>
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