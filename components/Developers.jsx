const developersList = [
    {
        image: '',
        name: 'Name'
    },
    {
        image: '',
        name: 'Name'
    },
    {
        image: '',
        name: 'Name'
    },
    {
        image: '',
        name: 'Name'
    },
    {
        image: '',
        name: 'Name'
    },
];

const Developer = ({ data: { image, name } }) => (
    <div className="developer">
        <div className="developer-image">
            <img src={image} alt="" />
        </div>
        <div className="developer-content">
            <div className="developer-name">
                {name}
            </div>
        </div>
    </div>
);

const Developers = () => (
    <section className="developers">
        <h2 className="developers-title section-title">
            Developers
        </h2>
        <div className="developers-list">
            {developersList.map(developer => <Developer key={developer.name} data={developer} />)}
        </div>
    </section>
);

export default Developers;