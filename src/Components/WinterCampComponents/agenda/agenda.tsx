import { useState } from "react"
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
} from "./agenda.ts"
import type { AgendaItem, Day } from "../../../types/agenda"



const agendaByDay: Record<Day, AgendaItem[]> = {
  day1: [
    { id: 1, time: "9:00 - 10:30", title: "ARRIVAL & BREAKFAST", speakers: null, type: "break" },
    { id: 2, time: "10:30 - 11:30", title: "OPENING KEYNOTE", speakers: "Sarah Johnson", type: "session" },
  ],
  day2: [
    { id: 3, time: "9:00 - 10:00", title: "BREAKFAST", speakers: null, type: "break" },
    { id: 4, time: "10:00 - 11:00", title: "PERFORMANCE OPTIMIZATION", speakers: "Rachel Green", type: "session" },
  ],
  day3: [
    { id: 5, time: "9:00 - 12:00", title: "ADVANCED AI WORKSHOP", speakers: "David Park", type: "session" },
  ],
}

export default function Agenda() {
  const [day, setDay] = useState<Day>("day1")

  return (
    <Page>
      <Main>
        <PageTitle>Schedule</PageTitle>
        <PageDescription>
          Three days of talks, workshops, and networking with industry leaders.
        </PageDescription>

        <Tabs>
          <TabButton active={day === "day1"} onClick={() => setDay("day1")}>
            DAY 1
          </TabButton>
          <TabButton active={day === "day2"} onClick={() => setDay("day2")}>
            DAY 2
          </TabButton>
          <TabButton active={day === "day3"} onClick={() => setDay("day3")}>
            DAY 3
          </TabButton>
        </Tabs>

        <Table>
          <TableHeader>
            <div>TIME</div>
            <div>TITLE</div>
            <div>SPEAKERS</div>
          </TableHeader>

          {agendaByDay[day].map((item) => (
            <Row key={item.id} isBreak={item.type === "break"}>
              <MutedCell>{item.time}</MutedCell>
              <Cell>{item.title}</Cell>
              {item.speakers ? <MutedCell>{item.speakers}</MutedCell> : <MutedCell>—</MutedCell>}
            </Row>
          ))}
        </Table>
      </Main>
    </Page>
  )
}
