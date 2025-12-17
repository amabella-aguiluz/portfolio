const NavbarLink = ({link, linkname}) => {
  return(
<ul>
    <a className="text-[#FCF5EE] text-lg" href={link}>{linkname}</a>
</ul>
  )
}
export default NavbarLink;