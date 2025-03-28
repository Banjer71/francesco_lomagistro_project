import React, { useEffect, useRef } from "react";
import fl1 from "../../images/francesco_top.jpg";
import fl2 from "../../images/main_large.jpg";
import fl3 from "../../images/fl3.jpg";
import fl4 from "../../images/fl4.jpg";

const FL_Sidebar_Info = () => {
  const imageRef = useRef(null);

  const handleScroll = () => {
    const flip = document.querySelector(".hero-flip");
    const rect = imageRef.current.getBoundingClientRect();
    let bodyClass = "section1";

    if (window.innerWidth > 960) {
      if (rect.top - window.innerHeight < 700) {
        bodyClass = "section1";
      } else if (rect.top - window.innerHeight < 300) {
        bodyClass = "section2";
      } else {
        bodyClass = "section3";
        flip.style.color = "#75accb";
      }
    }
    document.body.className = bodyClass;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="info" id="homepage">
      <h1 className="pro" id="fl" ref={imageRef}>
        Francesco Lomagistro
      </h1>
      <p className="info-text">
        Batterista/Percussionista/Insegnante da diversi anni sulle scene
        musicali nazionali ed internazionali, il suo approccio alla musica
        inizia con lo studio del pianoforte all’età di 11 anni per poi passare
        alla batteria a 16.
      </p>
      <p className="info-text">
        Inizia da autodidatta per poi prendere le prime lezioni e in seguito
        approfondisce la sua formazione partecipando a workshop e seminari con i
        "Big" dello strumento. <br />
        Ha conseguito la Laurea in “Strumenti a Percussioni” presso il
        Conservatorio N. Piccinni di Bari , ed in seguito la specialistica di II
        livello per la Didattica per lo Strumento Musicale.
      </p>
      <p className="info-text">
        La sua versatilità gli ha permesso di avere una intensa attività
        concertistica, diversificando la stessa in più ambiti e generi: dalla
        classica al pop , dal jazz allo studio recording, condividendo il palco
        con diversi artisti internazionali esibendosi in diversi paesi e
        continenti come Europa, Stati Uniti e Asia; ecco alcuni di loro: Kay F.
        Jackson, Joice Youlle, Kelly Joyce, Sandra St. Victor, Wendy Lewis,
        Madame Pat Tandy, Mariella Nava, Antonella Ruggero, Milva, Cecilia
        Gasdia, Elio, Erz, Freak Antoni, Enzo Gragnaniello, Tony Esposito,
        Eugenio Bennato, Mimmo Locasciulli, Mario Rosini, Fabrizio Sotti,
        Chihiro Yamanaka, Rick Stone, Rotem Sivam, Marcus Machado, David
        Schnitter , Vito Di Modugno, Fabio Morgera, Carol Sudhalter, Cicci
        Santucci, Marco Tamburini, Dario Deidda, Max Ionata, Gigi Cifarelli,
        Roberto Ottaviano, Gaetano Partipilo, Fabio Giachino, Barend Middlehoff,
        Teo Ciavarella ,Orchestra del DAMS di Bologna, Sugar Blu e tanti altri musisti di
        spicco della sua area geografica e musicale.
      </p>
      <img src={fl1} alt="T-riot on stage" />
      <p className="info-text">
        Oltre alle innumerevoli collaborazioni da sideman , dal 2005 da vita a
        dei progetti che lo vedono in prima linea come leader ; primo fra tutti
        e in collaborazione con Ettore Carucci, i{" "}
        <a
          href="https://open.spotify.com/artist/6GUaa8teYHKlgnUeUAWQHc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>
            Berardi Jazz Connection
          </span>
        </a>
        , un progetto jazz annoverato fra i più di spicco nel panorama del
        contemporany jazz europeo con i quali ha rilasciato 4 cd conosciuti in
        tutto il mondo, Giappone ,Usa e Nord Europa in testa; alcune
        composizioni sono state incluse in compilation di label e network
        mondiali. <br />
        Nel 2016 ha formato un nuovo progetto con <b>Pietro Vincenti</b> e{" "}
        <b>Camillo Pace</b>, i{" "}
        <a
          href="https://open.spotify.com/album/5P5wFTt9zl2uzvv2HxELLh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>T-RIOT</span>
        </a>
        , con i quali ha prodotto “A Different Truth” cd edito per l’etichetta
        giapponese Albòre Jazz, conquistando nuovi estimatori in Giappone , Nord
        Europa, Sud Africa e Stati Uniti; nominato fra i migliori dischi del
        2017 per Radio Jazz fm di Londra, e ai primi posti della Top Jazz Charts
        di iTunes in Finlandia e Vietnam, nella primavera del 2018 faranno un
        tour esibendosi in teatri e jazz club in Thailandia e Cina. <br />
        Nel 2021 esce un nuovo lavoro discografico da leader , stavolta in
        compagnia di Fabio Giachino e Gaetano Partipilo , si tratta di "World
        Expansion", un lavoro discografico che raccoglierà molti consensi dalla
        critica, distribuito dall' etichetta Prima o Poi di Petra Magoni. <br />
        Nel 2023 , a nome di Messina Pace Lomagistro uscirà "Galaxy Portrait" un
        disco interamente registrato live in una masseria nelle campagne della
        Valle d'Itria, distribuito da Angapp Music.
      </p>
      <img src={fl2} alt="T-riot on stage" />
      <p className="info-text">
        Nel corso della sua carriera ha registrato per etichette discografiche
        come Virgin, Universal, Hobo, Sony, Edel, Storie di Note, Irma Records,
        Family Affair, Dodicilune, Antibemusic, Flaminio Jazz, Caffè Concerto,
        Four, Albòre Jazz. E' stato intervistato e recensito dalle più
        importanti riviste di settore nazionali e internazionali. E' endorser
        internazionale dei marchi{" "}
        <a
          href="http://www.paiste.com/e/endorser_det.php?page=image&endorserid=5682"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>Paiste</span>
        </a>
        , &nbsp;
        <a
          href="https://vicfirth.zildjian.com/francesco-lomagistro-vf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>
            Vic Firth&nbsp;
          </span>
        </a>
        e&nbsp;
        <a
        href="https://www.ludwig-drums.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>
            &nbsp;Ludwig
          </span>
        </a>
        .
      </p>
      <h1 className="pro" id="triot" ref={imageRef}>
        Info Lesson
      </h1>
      <p className="info-text">
        Per Clinic Masterclass e lezioni cliccare in fondo alla pagina nella
        sezione contatti
      </p>
      <img src={fl4} alt="T-riot on stage" />
      <hr />
      <h1>English version</h1>
      <p className="info-text">
        Francesco Lomagistro, began piano studies at age of 11 and later
        switched to drums. He received his music education through private
        lessons and attendance at seminars by great musical Masters. He received
        his Degree in ‘Percussion Instruments’ at the “Niccolo Piccinni” Music
        Conservatory in Bari, Italy and the Degree in “Didactis for Musical
        Instruments ” He teaches “Drums and Percussions” at Liceo Musicale in
        Italy and make clinics over all the Country.
      </p>
      <p className="info-text">
        His versatility has afforded him experience in different musical
        ambients collaborating with a lot of different artists; some of his
        compositions have been included in many compilations around the world
        and have been featured in the top jazz charts.
      </p>
      <img src={fl3} alt="T-riot on stage" />
      <p className="info-text">
        He has participated in different recording sessions for different labels
        such as Virgin, Universal, Hobo-Sony, Edel, Storie di Note, Irma
        Records, Antibemusic, Family Affairs, Flaminio Jazz, P-Vine records,
        Four, Caffè Concerto, Dodicilune, Self, Jazz Engine/Auand.
      </p>
      <p className="info-text">
        He performed in different venues as theatres, clubs and festivals in
        Europe, USA and Asia. <br />
        In 2021, a new record will be released as a leader, this time in the
        company of Fabio Giachino and Gaetano Partipilo, "World Expansion", a
        record that will garner much critical acclaim, distributed by Petra
        Magoni's Prima o Poi label.
        <br />
        In 2023, "Galaxy Portrait" will be released under the name of Messina
        Pace Lomagistro, an album entirely recorded live on a farm in the
        countryside of the Valle d'Itria, distributed by Angapp Music.
        <br />
        He is international endorser with &nbsp;
        <a
          href="http://www.paiste.com/e/endorser_det.php?page=image&endorserid=5682"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>Paiste</span>
        </a>
        , &nbsp;
        <a
          href="https://vicfirth.zildjian.com/francesco-lomagistro-vf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>
            &nbsp;Vic Firth
          </span>
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.ludwig-drums.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>Ludwig</span>
        </a>
        .
      </p>
      <h1 className="pro" id="bjc" ref={imageRef}>
        As Leader
      </h1>
      <p className="info-text">
        He leads the group{" "}
        <a
          href="https://open.spotify.com/artist/6GUaa8teYHKlgnUeUAWQHc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>
            Berardi Jazz Connection
          </span>
        </a>
        , a European jazz project whose release 4 cd well known around the
        world, Japan ahead, and Usa and North Europe, and since 2016 he formed a
        new trio project the
        <a
          href="https://open.spotify.com/album/5P5wFTt9zl2uzvv2HxELLh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontWeight: "bold", color: "#000" }}> T-RIOT</span>
        </a>
        , with which he released the first cd "A different truth" for the
        japanese label Albòre Jazz, conquering new fans in Japan, North Europe,
        South Africa and Usa; the cd has been in some jazz top charts, and on
        May 2018 they made a tour in Asia , playing in theatres and venues in
        Bangkok and Honk Kong.
      </p>
      <p className="info-text" />
    </div>
  );
};

export default FL_Sidebar_Info;
