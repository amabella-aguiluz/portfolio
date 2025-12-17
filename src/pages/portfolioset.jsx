import PortfolioSample from './components/portfoliosample.jsx'

const PortfolioSet = ({id}) => {
  return(
    <div id={id} className="divBg">
          <h2> Projects </h2>
          <br />
    <div className="flex flex-row gap-2 flex-wrap">
      <PortfolioSample title="Spinagotchi"
        skills="React, TailwindCSS, ElectronJS" 
        description="A desktop tamagotchi."
        githubUrl="https://github.com/amabella-aguiluz/spinagotchi" />
        <br />
      <PortfolioSample title="Angela_Bot"
          skills="Python, SQLite"
          description="A general-use Discord bot."
          githubUrl="https://github.com/amabella-aguiluz/angela-bot" />
          <br />
      <PortfolioSample title="GigBytes"
        skills="Figma"
        description="A UI/UX mockup for an app where you can find local gigs anywhere."
        githubUrl="https://github.com/amabella-aguiluz/gigbytes_demo" />
        <br />
      <PortfolioSample title="Portfolio Site"
        skills="React, TailwindCSS"
        description="You're here! My personal portfolio website."
        githubUrl="https://github.com/amabella-aguiluz/portfolio" />
    </div>
    </div>
  )
}
export default PortfolioSet;