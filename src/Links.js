export default function Links() {
  const linksArray = ["www.linkedin.com/in/damian-zawadzki-07b2321a5/",2,3,4,5];
  const mapLinks = linksArray.map(link => link);
    return (
      <>
        <a className="linksMap">{mapLinks}</a>
      </>
    );
  }