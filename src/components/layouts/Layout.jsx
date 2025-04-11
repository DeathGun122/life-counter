export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer >
            <small>Created by</small>
            <a href="https://github.com/DeathGun122" target="_blank" >
            <p>@DeathGun122</p>
            <i className="fa-brands fa-github"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}