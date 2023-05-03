import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Fast Clean | Dashboard</title>
        {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com" refer></script> */}

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous" refer></script>
      </Head>

      <nav>
        <ul class="nav nav-tabs justify-content-center mt-3 mb-3">
          <li class="nav-item">
            <Link className="nav-link" href="/">Agenda do dia</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" href="/washsPanel/WashsPanel">Painel de lavagens</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;