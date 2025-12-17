import PortfolioSample from './components/portfoliosample.jsx'

const PortfolioSet = ({}) => {
  return(
    <div className="flex flex-row justify-around gap-2 flex-wrap">
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
    </div>
  )
}
export default PortfolioSet;