const YEAR = new Date().getFullYear();
const name = 'Maximoto'
export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © <p>{name}</p>.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
