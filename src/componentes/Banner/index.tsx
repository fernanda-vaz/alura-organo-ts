import './Banner.css'

interface BannerProps {
    srcImagem: string
    altImagem?: string
}

const Banner = ({srcImagem, altImagem }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={srcImagem} alt={altImagem}/>
        </header>
    )
}

export default Banner