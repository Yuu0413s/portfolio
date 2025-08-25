const linksData = [
    { type: 'email', label: 'GMail', value: 'y.shibata0820@gmail.com' },
    { type: 'link', label: 'Github', url: 'https://github.com/Yuu0413' },
    { type: 'link', label: 'note', url: 'https://note.com/yuu_0413' },
    { type: 'link', label: 'Qiita', url: 'https://qiita.com/yuu_0413' },
];

const Links = () => {
    return (
        <section id="links">
        <h2>リンク</h2>
        <ul>
            {linksData.map((link) => (
                <li key={link.label}>
                    {link.type === 'email' ? (
                        `${link.label} : ${link.value}`
                    ) : (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                </a>
            )}
            </li>
        ))}
        </ul>
    </section>
    );
};

export default Links;