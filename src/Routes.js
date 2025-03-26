import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Proker from "./Proker";
import Tentang from "./Tentang";
import DigmapiStore from "./DigmapiStore";
import DigmapiHelp from "./DigmapiHelp";
import InternalProker from "./ProkerJS/InternalProker";
import RisbangProker from "./ProkerJS/RisbangProker";
import AkpresProker from "./ProkerJS/AkpresProker";
import AdkesmahProker from "./ProkerJS/AdkesmahProker";
import KastratProker from "./ProkerJS/KastratProker";
import EkrafProker from "./ProkerJS/EkrafProker";
import MedbrandProker from "./ProkerJS/MedbrandProker";
import PeragaProker from "./ProkerJS/PeragaProker";
import PSDMProker from "./ProkerJS/PSDMProker";
import SenbudProker from "./ProkerJS/SenbudProker";
import SerasiProker from "./ProkerJS/SerasiProker";
import SLHProker from "./ProkerJS/SLHProker";
import InternalTentang from "./TentangJS/InternalTentang";
import RisbangTentang from "./TentangJS/RisbangTentang";
import AkpresTentang from "./TentangJS/AkpresTentang";
import AdkesmahTentang from "./TentangJS/AdkesmahTentang";
import KastratTentang from "./TentangJS/KastratTentang";
import EkrafTentang from "./TentangJS/EkrafTentang";
import MedbrandTentang from "./TentangJS/MedbrandTentang";
import PeragaTentang from "./TentangJS/PeragaTentang";
import PSDMTentang from "./TentangJS/PSDMTentang";
import SenbudTentang from "./TentangJS/SenbudTentang";
import SerasiTentang from "./TentangJS/SerasiTentang";
import SLHTentang from "./TentangJS/SLHTentang";
import BPHTentang from "./TentangJS/BPHTentang";
import BawaMimpimu from "./BiroProker/BawaMimpimu";
import SahabatInternal from "./BiroProker/SahabatInternal";
import WelcomingParty from "./BiroProker/WelcomingParty";
import Rapot from "./BiroProker/Rapot";
import BukaBersama from "./BiroProker/BukaBersama";
import SuratPKU from "./BiroProker/SuratPKU";
import SurkesuUTS from "./BiroProker/SurkesuUTS";
import Riszwei from "./BiroProker/Riszwei";
import Rintig from "./BiroProker/Rintig";
import Riscol from "./BiroProker/Riscol";
import Webris from "./BiroProker/Webris";
import Risbang100 from "./BiroProker/Risbang100";
import Widyaris from "./BiroProker/Widyaris";
import Humas101 from "./BiroProker/Humas101";
import Database from "./BiroProker/Database";
import RelasiEvaluasi from "./BiroProker/RelasiEvaluasi";
import Internalisasi from "./BiroProker/Internalisasi";
import Digmacast from "./BiroProker/Digmacast";
import Digmanews from "./BiroProker/Digmanews";
import UjarPKU from "./BiroProker/UjarPKU";
import Publikasi from "./BiroProker/Publikasi";
import SayembaraLogo from "./BiroProker/SayembaraLogo";
import GrandLaunching from "./BiroProker/GrandLaunching";
import SuarakanMimpi from "./BiroProker/SuarakanMimpi";
import AdvoProject from "./DeptProkerA/AdvoProject";
import AdvoBerbagi from "./DeptProkerA/AdvoBerbagi";
import Kekuras from "./DeptProkerA/Kekuras";
import SapaMaba from "./DeptProkerA/SapaMaba";
import HarmonyMinds from "./DeptProkerA/HarmonyMinds";
import PeduliUKT from "./DeptProkerA/PeduliUKT";
import InfoAkpres from "./DeptProkerA/InfoAkpres";
import SurveyPrestasi from "./DeptProkerA/SurveyPrestasi";
import RuangBelajar from "./DeptProkerA/RuangBelajar";
import PCW from "./DeptProkerA/PCW";
import Ngopi from "./DeptProkerA/Ngopi";
import KabarKastrat from "./DeptProkerA/KabarKastrat";
import LamanKastrat from "./DeptProkerA/LamanKastrat";
import Pustakastrat from "./DeptProkerA/Pustakastrat";
import Sehari from "./DeptProkerA/Sehari";
import BincangPolitik from "./DeptProkerA/BincangPolitik";
import PanggungPolemik from "./DeptProkerA/PanggungPolemik";
import PGTO from "./DeptProkerA/PGTO";
import Gelora from "./DeptProkerA/Gelora";
import SobatGerak from "./DeptProkerA/SobatGerak";
import Crayon from "./DeptProkerB/Iconics";
import Marvel from "./DeptProkerB/Marvel";
import Simfoni from "./DeptProkerB/Simfoni";
import Iconics from "./DeptProkerB/Crayon";
import SehariBerbatik from "./DeptProkerB/SehariBerbatik";
import IndonesiaFunfact from "./DeptProkerB/IndonesiaFunfact";
import ProjectX from "./DeptProkerB/ProjectX";
import Petarung from "./DeptProkerB/Petarung";
import M3 from "./DeptProkerB/M3";
import BisikBerisi from "./DeptProkerB/BisikBerisi";
import RapatEvaluasi from "./DeptProkerB/RapatEvaluasi";
import Preneurpedia from "./DeptProkerB/Preneurpedia";
import Preneurzone from "./DeptProkerB/Preneurzone";
import DirgantaraStore from "./DeptProkerB/DirgantaraStore";
import FinestClass from "./DeptProkerB/FinestClass";
import Syarat from "./DigmapiStore/syarat";
import Batas from "./DigmapiStore/batas";
import Alur from "./DigmapiStore/alur";
import Proses from "./DigmapiStore/proses";
import Konveksi from "./DigmapiStore/konveksi";
import BPHProker from "./ProkerJS/BPHProker";
import Rapat100Hari from "./BiroProker/Rapat100Hari";
import RapatBPH from "./BiroProker/RapatBPH";
import RapatBendahara from "./BiroProker/RapatBendahara";
import RapatKetua from "./BiroProker/RapatKetua";
import RapatPimpinan from "./BiroProker/RapatPimpinan";
import RapatSekretaris from "./BiroProker/RapatSekretaris";
import { createBrowserRouter, RouterProvider, Route, Router, Routes } from "react-router-dom";
import SurkesuUAS from "./BiroProker/SurkesuUAS";
import KenalKabinet from "./BiroProker/KenalKabinet";
import LigaDigmapi from "./BiroProker/LigaDigmapi";
import Passion from "./DeptProkerA/Passion";
import Creativity from "./DeptProkerB/Creativity";
import StudyVisit from "./DeptProkerB/StudyVisit";
import { Scrollbar } from "swiper/modules";
import ScrollToTop from "./ScrollToTop";
import Serentak from "./DeptProkerA/Serentak"

const Routess = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/proker",
      element: <Proker />,
    },
    {
      path: "/tentang",
      element: <App />,
    },
    {
      path: "/digmapihelp",
      element: <DigmapiHelp />,
    },
    {
      path: "/digmapistore",
      element: <DigmapiStore />,
    },
    {
      path: "/adkesmahproker",
      element: <AdkesmahProker />,
    },
    {
      path: "/akpresproker",
      element: <AkpresProker />,
    },
    {
      path: "/ekrafproker",
      element: <EkrafProker />,
    },
    {
      path: "/kastratproker",
      element: <KastratProker />,
    },
    {
      path: "/medbrandproker",
      element: <MedbrandProker />,
    },
    {
      path: "/peragaproker",
      element: <PeragaProker />,
    },
    {
      path: "/psdmproker",
      element: <PSDMProker />,
    },
    {
      path: "/senbudproker",
      element: <SenbudProker />,
    },
    {
      path: "/serasiproker",
      element: <SerasiProker />,
    },
    {
      path: "/slhproker",
      element: <SLHProker />,
    },
    {
      path: "/risbangproker",
      element: <RisbangProker />,
    },
    {
      path: "/internalproker",
      element: <InternalProker />,
    },
    {
      path: "/adkesmahtentang",
      element: <App />,
    },
    {
      path: "/akprestentang",
      element: <App />,
    },
    {
      path: "/ekraftentang",
      element: <App />,
    },
    {
      path: "/kastrattentang",
      element: <App />,
    },
    {
      path: "/medbrandtentang",
      element: <App />,
    },
    {
      path: "/peragatentang",
      element: <App />,
    },
    {
      path: "/psdmtentang",
      element: <App />,
    },
    {
      path: "/senbudtentang",
      element: <App />,
    },
    {
      path: "/serasitentang",
      element: <App />,
    },
    {
      path: "/slhtentang",
      element: <App />,
    },
    {
      path: "/risbangtentang",
      element: <App />,
    },
    {
      path: "/internaltentang",
      element: <App />,
    },
    {
      path: "/bphtentang",
      element: <App />,
    },
    {
      path: "/bawamimpimu",
      element: <BawaMimpimu />,
    },
    {
      path: "/welcomingparty",
      element: <WelcomingParty />,
    },
    {
      path: "/bukabersama",
      element: <BukaBersama />,
    },
    {
      path: "/rapot",
      element: <Rapot />,
    },
    {
      path: "/sahabatinternal",
      element: <SahabatInternal />,
    },
    {
      path: "/suratpku",
      element: <SuratPKU />,
    },
    {
      path: "/widyaris",
      element: <Widyaris />,
    },
    {
      path: "/Riszwei",
      element: <Riszwei />,
    },
    {
      path: "/risbang100",
      element: <Risbang100 />,
    },
    {
      path: "/riscol",
      element: <Riscol />,
    },
    {
      path: "/rintig",
      element: <Rintig />,
    },
    {
      path: "/webris",
      element: <Webris />,
    },
    {
      path: "/surkesuuts",
      element: <SurkesuUTS />,
    },
    {
      path: "/database",
      element: <Database />,
    },
    {
      path: "/internalisasi",
      element: <Internalisasi />,
    },
    {
      path: "/relasievaluasi",
      element: <RelasiEvaluasi />,
    },
    {
      path: "/humas101",
      element: <Humas101 />,
    },
    {
      path: "/digmacast",
      element: <Digmacast />,
    },
    {
      path: "/digmanews",
      element: <Digmanews />,
    },
    {
      path: "/ujarpku",
      element: <UjarPKU />,
    },
    {
      path: "/publikasi",
      element: <Publikasi />,
    },
    {
      path: "/sayembaralogo",
      element: <SayembaraLogo />,
    },
    {
      path: "/grandlaunching",
      element: <GrandLaunching />,
    },
    {
      path: "/suarakanmimpi",
      element: <SuarakanMimpi />,
    },
    {
      path: "/advoproject",
      element: <AdvoProject />,
    },
    {
      path: "/advoberbagi",
      element: <AdvoBerbagi />,
    },
    {
      path: "/peduliukt",
      element: <PeduliUKT />,
    },
    {
      path: "/kekuras",
      element: <Kekuras />,
    },
    {
      path: "/harmonyminds",
      element: <HarmonyMinds />,
    },
    {
      path: "/sapamaba",
      element: <SapaMaba />,
    },
    {
      path: "/infoakpres",
      element: <InfoAkpres />,
    },
    {
      path: "/surveyprestasi",
      element: <SurveyPrestasi />,
    },
    {
      path: "/ruangbelajar",
      element: <RuangBelajar />,
    },
    {
      path: "/pcw",
      element: <PCW />,
    },
    {
      path: "/ngopi",
      element: <Ngopi />,
    },
    {
      path: "/kabarkastrat",
      element: <KabarKastrat />,
    },
    {
      path: "/lamankastrat",
      element: <LamanKastrat />,
    },
    {
      path: "/pustakastrat",
      element: <Pustakastrat />,
    },
    {
      path: "/sehari",
      element: <Sehari />,
    },
    {
      path: "/bincangpolitik",
      element: <BincangPolitik />,
    },
    {
      path: "/panggungpolemik",
      element: <PanggungPolemik />,
    },
    {
      path: "/pgto",
      element: <PGTO />,
    },
    {
      path: "/gelorapku",
      element: <Gelora />,
    },
    {
      path: "/sobatgerak",
      element: <SobatGerak />,
    },
    {
      path: "/simfoni",
      element: <Simfoni />,
    },
    {
      path: "/marvel",
      element: <Marvel />,
    },
    {
      path: "/iconics",
      element: <Iconics />,
    },
    {
      path: "/crayon",
      element: <Crayon />,
    },
    {
      path: "/sehariberbatik",
      element: <SehariBerbatik />,
    },
    {
      path: "/indonesiafunfact",
      element: <IndonesiaFunfact />,
    },
    {
      path: "/projectx",
      element: <ProjectX />,
    },
    {
      path: "/m3",
      element: <M3 />,
    },
    {
      path: "/petarung",
      element: <Petarung />,
    },
    {
      path: "/rapatevaluasi",
      element: <RapatEvaluasi />,
    },
    {
      path: "/bisikberisi",
      element: <BisikBerisi />,
    },
    {
      path: "/dirgantarastore",
      element: <DirgantaraStore />,
    },
    {
      path: "/preneurpedia",
      element: <Preneurpedia />,
    },
    {
      path: "/preneurzone",
      element: <Preneurzone />,
    },
    {
      path: "/finestclass",
      element: <FinestClass />,
    },
    {
      path: "/syarat",
      element: <Syarat />,
    },
    {
      path: "/batas",
      element: <Batas />,
    },
    {
      path: "/alur",
      element: <Alur />,
    },
    {
      path: "/proses",
      element: <Proses />,
    },
    {
      path: "/konveksi",
      element: <DigmapiStore />,
    },
    {
      path: "/bphproker",
      element: <BPHProker />,
    },
    {
      path: "/rapatbph",
      element: <RapatBPH />,
    },
    {
      path: "/rapatpimpinan",
      element: <RapatPimpinan />,
    },
    {
      path: "/rapatketua",
      element: <RapatKetua />,
    },
    {
      path: "/rapatbendahara",
      element: <RapatBendahara />,
    },
    {
      path: "/rapatsekretaris",
      element: <RapatSekretaris />,
    },
    {
      path: "/rapat100hari",
      element: <Rapat100Hari />,
    },
    {
      path: "/surkesuuas",
      element: <SurkesuUAS />,
    },
    {
      path: "/kenalkabinet",
      element: <KenalKabinet />,
    },
    {
      path: "/ligadigmapi",
      element: <LigaDigmapi />,
    },
    {
      path: "/passion",
      element: <Passion />,
    },
    {
      path: "/creativity",
      element: <Creativity />,
    },
    {
      path: "/studyvisit",
      element: <StudyVisit />,
    },
    {
      path: "/serentak",
      element: <Serentak />,
    },

  ];

  export default Routess