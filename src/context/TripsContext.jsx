import { createContext, useContext } from "react"

/* export const GlobalContext = createContext() */

const TripsContext = createContext()

const trips = [
  {
    id: 1,
    destination: "Roma",
    startDate: "2026-05-02",
    endDate: "2026-05-06",
    participants: [
      {
        id: 1,
        firstName: "Marco",
        lastName: "Rossi",
        phone: "3331234567",
        fiscalCode: "RSSMRC90A01H501U",
      },
      {
        id: 2,
        firstName: "Giulia",
        lastName: "Bianchi",
        phone: "3339876543",
        fiscalCode: "BNCGLI92B41F205X",
      },
      {
        id: 3,
        firstName: "Luca",
        lastName: "Verdi",
        phone: "3334567890",
        fiscalCode: "VRDLCU88C15D612K",
      },
    ],
  },
  {
    id: 2,
    destination: "Milano",
    startDate: "2026-05-10",
    endDate: "2026-05-14",
    participants: [
      {
        id: 1,
        firstName: "Sara",
        lastName: "Romano",
        phone: "3331112233",
        fiscalCode: "RMNSRA91D45F205Z",
      },
      {
        id: 2,
        firstName: "Davide",
        lastName: "Ferrari",
        phone: "3334445566",
        fiscalCode: "FRRDVD89E12L219P",
      },
      {
        id: 3,
        firstName: "Martina",
        lastName: "Greco",
        phone: "3337778899",
        fiscalCode: "GRCMTN94F20A944L",
      },
    ],
  },
  {
    id: 3,
    destination: "Firenze",
    startDate: "2026-05-15",
    endDate: "2026-05-18",
    participants: [
      {
        id: 1,
        firstName: "Alessandro",
        lastName: "Conti",
        phone: "3341234567",
        fiscalCode: "CNTLSN87G10D612R",
      },
      {
        id: 2,
        firstName: "Elena",
        lastName: "Marini",
        phone: "3349876543",
        fiscalCode: "MRNLNE93H22H501S",
      },
      {
        id: 3,
        firstName: "Francesco",
        lastName: "Gallo",
        phone: "3344567890",
        fiscalCode: "GLLFNC90I18F839M",
      },
    ],
  },
  {
    id: 4,
    destination: "Venezia",
    startDate: "2026-05-20",
    endDate: "2026-05-24",
    participants: [
      {
        id: 1,
        firstName: "Chiara",
        lastName: "Moretti",
        phone: "3341112233",
        fiscalCode: "MRTCHR95L44L736Q",
      },
      {
        id: 2,
        firstName: "Matteo",
        lastName: "Ricci",
        phone: "3344445566",
        fiscalCode: "RCCMTT88M12H501P",
      },
      {
        id: 3,
        firstName: "Laura",
        lastName: "Esposito",
        phone: "3347778899",
        fiscalCode: "SPSLRA93N55F839T",
      },
    ],
  },
  {
    id: 5,
    destination: "Napoli",
    startDate: "2026-05-25",
    endDate: "2026-05-30",
    participants: [
      {
        id: 1,
        firstName: "Antonio",
        lastName: "Russo",
        phone: "3351234567",
        fiscalCode: "RSSNTN89P10F839Y",
      },
      {
        id: 2,
        firstName: "Federica",
        lastName: "De Luca",
        phone: "3359876543",
        fiscalCode: "DLCFRC94R41F839A",
      },
      {
        id: 3,
        firstName: "Gennaro",
        lastName: "Coppola",
        phone: "3354567890",
        fiscalCode: "CPP GNR90S15F839B".replace(" ", ""),
      },
    ],
  },
  {
    id: 6,
    destination: "Torino",
    startDate: "2026-06-01",
    endDate: "2026-06-05",
    participants: [
      {
        id: 1,
        firstName: "Simone",
        lastName: "Barbieri",
        phone: "3351112233",
        fiscalCode: "BRBSMN91T22L219C",
      },
      {
        id: 2,
        firstName: "Valentina",
        lastName: "Riva",
        phone: "3354445566",
        fiscalCode: "RVAVNT92A45L219D",
      },
      {
        id: 3,
        firstName: "Andrea",
        lastName: "Fontana",
        phone: "3357778899",
        fiscalCode: "FNTNDR88B18L219E",
      },
    ],
  },
  {
    id: 7,
    destination: "Bologna",
    startDate: "2026-06-07",
    endDate: "2026-06-10",
    participants: [
      {
        id: 1,
        firstName: "Roberto",
        lastName: "Fabbri",
        phone: "3361234567",
        fiscalCode: "FBBRRT87C10A944F",
      },
      {
        id: 2,
        firstName: "Silvia",
        lastName: "Costa",
        phone: "3369876543",
        fiscalCode: "CSTSLV93D41A944G",
      },
      {
        id: 3,
        firstName: "Michele",
        lastName: "Leone",
        phone: "3364567890",
        fiscalCode: "LNEMHL90E15A944H",
      },
    ],
  },
  {
    id: 8,
    destination: "Palermo",
    startDate: "2026-06-12",
    endDate: "2026-06-17",
    participants: [
      {
        id: 1,
        firstName: "Salvatore",
        lastName: "Messina",
        phone: "3361112233",
        fiscalCode: "MSSSVT89F10G273J",
      },
      {
        id: 2,
        firstName: "Claudia",
        lastName: "Vitale",
        phone: "3364445566",
        fiscalCode: "VTLCLD94G41G273K",
      },
      {
        id: 3,
        firstName: "Roberta",
        lastName: "Amato",
        phone: "3367778899",
        fiscalCode: "MTARBT92H15G273L",
      },
    ],
  },
  {
    id: 9,
    destination: "Bari",
    startDate: "2026-06-20",
    endDate: "2026-06-23",
    participants: [
      {
        id: 1,
        firstName: "Nicola",
        lastName: "Lombardi",
        phone: "3371234567",
        fiscalCode: "LMBNCL88I10A662M",
      },
      {
        id: 2,
        firstName: "Ilaria",
        lastName: "Serra",
        phone: "3379876543",
        fiscalCode: "SRRLRI95L41A662N",
      },
      {
        id: 3,
        firstName: "Paolo",
        lastName: "Mancini",
        phone: "3374567890",
        fiscalCode: "MNCPLA90M15A662P",
      },
    ],
  },
  {
    id: 10,
    destination: "Cagliari",
    startDate: "2026-06-25",
    endDate: "2026-06-29",
    participants: [
      {
        id: 1,
        firstName: "Giorgio",
        lastName: "Sanna",
        phone: "3371112233",
        fiscalCode: "SNNGRG87N10B354Q",
      },
      {
        id: 2,
        firstName: "Arianna",
        lastName: "Piras",
        phone: "3374445566",
        fiscalCode: "PRS RNN94P41B354R".replace(" ", ""),
      },
      {
        id: 3,
        firstName: "Fabio",
        lastName: "Melis",
        phone: "3377778899",
        fiscalCode: "MLS FBA91R15B354S".replace(" ", ""),
      },
    ],
  },
];

export function TripsProvider({ children }) {
    const value = { trips }
    return (
        <TripsContext.Provider value={value}>
            {children}
        </TripsContext.Provider>
    )
}

export function useTrips() {

    return useContext(TripsContext)

}


