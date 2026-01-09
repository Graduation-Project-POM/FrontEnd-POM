import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
    Page,
    Main,
    PageTitle,
    PageDescription,
    Tabs,
    TabButton,
    Table,
    TableHeader,
    Row,
    Cell,
    MutedCell,
} from "./agenda"
import type { AgendaItem, Day } from "../../../types/agenda"

const agendaByDay: Record<Day, AgendaItem[]> = {
    day1: [
        { id: 1, time: "8:00 - 9:30", title: "agenda.arrival", speakers: null, type: "break" },
        {
            id: 2,
            time: "10:00 - 11:30",
            title: "agenda.opening.title",
            speakers: [
                "agenda.opening.welcome",
                "agenda.opening.hostUniversity",
                "agenda.opening.moe",
                "agenda.opening.past",
                "agenda.opening.taawon",
                "agenda.opening.intro"
            ],
            type: "session"
        },
        { id: 3, time: "12:30 - 13:30", title: "agenda.lunch", speakers: null, type: "break" },
        {
            id: 4,
            time: "14:00 - 15:20",
            title: "agenda.sessions.algebra",
            speakers: ["speakers.mohammadAlAdam"],
            type: "session"
        },
        {
            id: 5,
            time: "15:30 - 17:00",
            title: "agenda.sessions.algebra",
            speakers: ["speakers.mohammadAlAdam"],
            type: "session"
        },
        { id: 6, time: "17:00 - 18:30", title: "agenda.dinner", speakers: null, type: "break" },
        {
            id: 7,
            time: "",
            title: "agenda.videos",
            speakers: [
                "organizations.moe",
                "organizations.past",
                "organizations.taawon"
            ],
            type: "session"
        }
    ],

    day2: [
        { id: 1, time: "8:00 - 8:30", title: "agenda.breakfast", speakers: null, type: "break" },
        {
            id: 2,
            time: "9:00 - 10:30",
            title: "agenda.sessions.geometry",
            speakers: ["speakers.abdulrahimMousa"],
            type: "session"
        },
        {
            id: 3,
            time: "10:40 - 12:10",
            title: "agenda.sessions.geometry",
            speakers: ["speakers.abdulrahimMousa"],
            type: "session"
        },
        { id: 4, time: "12:30 - 14:00", title: "agenda.lunch", speakers: null, type: "break" },
        {
            id: 5,
            time: "14:00 - 15:20",
            title: "agenda.sessions.geometry",
            speakers: ["speakers.abdulrahimMousa"],
            type: "session"
        },
        {
            id: 6,
            time: "15:30 - 17:00",
            title: "agenda.sessions.geometry",
            speakers: ["speakers.abdulrahimMousa"],
            type: "session"
        },
        { id: 7, time: "17:00 - 18:30", title: "agenda.dinner", speakers: null, type: "break" },
        {
            id: 8,
            time: "19:00 - 20:30",
            title: "agenda.talks.mathEnjoyment",
            speakers: ["speakers.ahmadAlJundi"],
            type: "session"
        }
    ],

    day3: [
        { id: 1, time: "8:00 - 8:30", title: "agenda.breakfast", speakers: null, type: "break" },
        {
            id: 2,
            time: "9:00 - 10:30",
            title: "agenda.sessions.algebra",
            speakers: ["speakers.afafSaghir"],
            type: "session"
        },
        {
            id: 3,
            time: "10:40 - 12:10",
            title: "agenda.sessions.algebra",
            speakers: ["speakers.nadeenIssa"],
            type: "session"
        },
        { id: 4, time: "12:30 - 14:00", title: "agenda.lunch", speakers: null, type: "break" },
        {
            id: 5,
            time: "14:00 - 15:20",
            title: "agenda.sessions.numberTheory",
            speakers: ["speakers.salahFayyad"],
            type: "session"
        },
        {
            id: 6,
            time: "15:30 - 17:00",
            title: "agenda.sessions.combinatorics",
            speakers: ["speakers.mohammadMaraaba"],
            type: "session"
        },
        { id: 7, time: "17:00 - 18:30", title: "agenda.dinner", speakers: null, type: "break" },
        {
            id: 8,
            time: "19:00 - 20:30",
            title: "agenda.talks.imoPath",
            speakers: ["speakers.omarAlHusni"],
            type: "session"
        }
    ],

    day4: [
        { id: 1, time: "8:00 - 8:30", title: "agenda.breakfast", speakers: null, type: "break" },
        {
            id: 2,
            time: "9:00 - 10:30",
            title: "agenda.sessions.numberTheory",
            speakers: ["speakers.raniaWannan"],
            type: "session"
        },
        {
            id: 3,
            time: "10:40 - 12:10",
            title: "agenda.sessions.numberTheory",
            speakers: ["speakers.raniaWannan"],
            type: "session"
        },
        { id: 4, time: "12:30 - 14:00", title: "agenda.lunch", speakers: null, type: "break" },
        {
            id: 5,
            time: "14:00 - 15:20",
            title: "agenda.sessions.numberTheory",
            speakers: ["speakers.raniaWannan"],
            type: "session"
        },
        {
            id: 6,
            time: "15:30 - 17:00",
            title: "agenda.sessions.numberTheory",
            speakers: ["speakers.lubnaAbuBasha"],
            type: "session"
        },
        { id: 7, time: "17:00 - 18:30", title: "agenda.dinner", speakers: null, type: "break" },
        {
            id: 8,
            time: "19:00 - 20:30",
            title: "agenda.talks.programmingMath",
            speakers: ["speakers.mohammadKhalil"],
            type: "session"
        }
    ],

    day5: [
        { id: 1, time: "8:00 - 8:30", title: "agenda.breakfast", speakers: null, type: "break" },
        {
            id: 2,
            time: "9:00 - 10:30",
            title: "agenda.sessions.combinatorics",
            speakers: ["speakers.mohammadMaraaba"],
            type: "session"
        },
        {
            id: 3,
            time: "10:40 - 12:10",
            title: "agenda.sessions.combinatorics",
            speakers: ["speakers.mohammadMaraaba"],
            type: "session"
        },
        { id: 4, time: "12:30 - 14:00", title: "agenda.lunch", speakers: null, type: "break" },
        {
            id: 5,
            time: "14:00 - 15:20",
            title: "agenda.sessions.combinatorics",
            speakers: ["speakers.mohammadMaraaba"],
            type: "session"
        },
        {
            id: 6,
            time: "15:30 - 17:00",
            title: "agenda.sessions.combinatorics",
            speakers: ["speakers.mohammadMaraaba"],
            type: "session"
        },
        { id: 7, time: "17:00 - 18:30", title: "agenda.dinner", speakers: null, type: "break" }
    ],

    day6: [
        { id: 1, time: "8:00 - 8:30", title: "agenda.breakfast", speakers: null, type: "break" },
        { id: 2, time: "9:00 - 13:00", title: "agenda.qualifiers", speakers: null, type: "session" },
        { id: 3, time: "13:30 - 14:00", title: "agenda.lunchOnly", speakers: null, type: "break" },
        { id: 4, time: "14:00 - 15:00", title: "agenda.departure", speakers: null, type: "break" }
    ]
}

export default function Agenda() {
    const [day, setDay] = useState<Day>("day1")
    const { t, i18n } = useTranslation()

    return (
        <Page style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
            <Main style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
                <PageTitle>{t("agenda.title")}</PageTitle>
                <PageDescription>{t("agenda.description")}</PageDescription>

                <Tabs style={{ marginLeft: i18n.language === "ar" ? "auto" : "0" }}>
                    {(Object.keys(agendaByDay) as Day[]).map((d) => (
                        <TabButton key={d} active={day === d} onClick={() => setDay(d)}>
                            {t(`agenda.days.${d}`)}
                        </TabButton>
                    ))}
                </Tabs>
                <Table>
                    <TableHeader style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}>
                        <div>{t("agenda.table.time")}</div>
                        <div>{t("agenda.table.title")}</div>
                        <div>{t("agenda.table.supervisor")}</div>
                    </TableHeader>

                    {agendaByDay[day].map((item) => (
                        <Row key={item.id} isBreak={item.type === "break"}>
                            <MutedCell>{item.time}</MutedCell>
                            <Cell>{t(item.title)}</Cell>
                            <MutedCell>
                                {item.speakers ? item.speakers.map((s, i) => <div key={i}>{t(s)}</div>) : "—"}
                            </MutedCell>
                        </Row>
                    ))}
                </Table>
            </Main>
        </Page>
    )
}
