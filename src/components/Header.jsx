import '../styles/Header.scss';

export default function Header(props) {

  const generateOptions = () => {
    if (!props.links) return;
    const options = [];
    for (let option of props.links) {
      options.push(<a className='option' key={option.path} href={option.path}>{option.name}</a>)
    }
    return options;
  }

  return (
    <header>
      {generateOptions()}
    </header>
  )
}