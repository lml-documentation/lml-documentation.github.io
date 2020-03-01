const developersList = [
    {
        imageUrl: 'photo01.jpg',
        name: 'Ekaterina Zarudnaya'
    },
    {
        imageUrl: 'photo02.jpg',
        name: 'Denys Hura'
    },
    {
        imageUrl: 'photo03.jpg',
        name: 'Basov Maksym'
    },
    {
        imageUrl: 'photo04.jpg',
        name: 'Bohdan Hlovatskyi'
    },
    {
        imageUrl: 'photo05.jpg',
        name: 'Vladislav Godunov'
    },
];

const Developer = ({ data: { imageUrl, name } }) => (
    <div className="developer">
        <div className="developer-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
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
            {developersList.map((developer, i) => <Developer key={`developer${i}`} data={developer} />)}
        </div>
    </section>
);

export default Developers;