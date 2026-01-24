import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material"
import type { Trainers } from "../../../types/trainers"
import {
    pageWrapper,
    sectionTitle,
    cardsWrapper,
    card,
    cardContent,
    textWrapper,
    image,
    nameText,
    subtitleText,
    descriptionText,
} from "./trainersStyles"
import { useTranslation } from "react-i18next";

export default function Trainers() {
    const { t } = useTranslation();

    const partners: Trainers[] = [
        {
            name: t("partner.partner0.name"),
            title: "",
            subtitle: "",
            description: t("partner.partner0.description"),
            image: "/DrMaree.png",
        },
        {
            name: t("partner.partner1.name"),
            title: "",
            subtitle: "",
            description: t("partner.partner1.description"),
            image: "/DrAmmar.png",
        },
        {
            name: t("partner.partner2.name"),
            title: "",
            subtitle: "",
            description: t("partner.partner2.description"),
            image: "/DrShorook.png",
        },
    ]

    const guests: Trainers[] = [
        {
            name: t("guests.guest0.name"),
            title: "",
            subtitle: "",
            description: t("guests.guest0.description"),
            image: "/DrMarwan.png",
        },
        {
            name: t("guests.guest1.name"),
            title: "",
            subtitle: "",
            description: "",
            image: "/.png",
        },
    ]

    const speakers: Trainers[] = [
        {
            name: t("speaker.speaker0.name"),
            title: t("speaker.speaker0.title"),
            subtitle: t("speaker.speaker0.subtitle"),
            description: t("speaker.speaker0.description"),
            image: "/DrOmer.png",
        },
        {
            name: t("speaker.speaker1.name"),
            title: "",
            subtitle: t("speaker.speaker1.subtitle"),
            description: t("speaker.speaker1.description"),
            image: "/DrAhmed.png",
        },
        {
            name: t("speaker.speaker2.name"),
            title: "",
            subtitle: t("speaker.speaker2.subtitle"),
            description: t("speaker.speaker2.description"),
            image: "/DrKhalil.png",
        },
    ]

    const supervisors: Trainers[] = [
        {
            name: t("supervisors.supervisor0.name"),
            title: "",
            subtitle: t("supervisors.supervisor0.subtitle"),
            description: t("supervisors.supervisor0.description"),
            image: "/DrRania.png",
        },
        {
            name: t("supervisors.supervisor1.name"),
            title: "",
            subtitle: t("supervisors.supervisor1.subtitle"),
            description: t("supervisors.supervisor1.description"),
            image: "/DrAbed.png",
        },
        {
            name: t("supervisors.supervisor2.name"),
            title: "",
            subtitle: t("supervisors.supervisor2.subtitle"),
            description: t("supervisors.supervisor2.description"),
            image: "/DrAladam.png",
        },
        {
            name: t("supervisors.supervisor3.name"),
            title: "",
            subtitle: t("supervisors.supervisor3.subtitle"),
            description: t("supervisors.supervisor3.description"),
            image: "/DrMaraabeh.png",
        },
        {
            name: t("supervisors.supervisor4.name"),
            title: "",
            subtitle: t("supervisors.supervisor4.subtitle"),
            description: t("supervisors.supervisor4.description"),
            image: "/DrReham.png",
        },
        {
            name: t("supervisors.supervisor5.name"),
            title: "",
            subtitle: t("supervisors.supervisor5.subtitle"),
            description: t("supervisors.supervisor5.description"),
            image: "/DrAfaf.png",
        },
        {
            name: t("supervisors.supervisor6.name"),
            title: "",
            subtitle: t("supervisors.supervisor6.subtitle"),
            description: t("supervisors.supervisor6.description"),
            image: "/DrNadeen.png",
        },
        {
            name: t("supervisors.supervisor7.name"),
            title: "",
            subtitle: t("supervisors.supervisor7.subtitle"),
            description: t("supervisors.supervisor7.description"),
            image: "/DrSalah.png",
        },
        {
            name: t("supervisors.supervisor8.name"),
            title: "",
            subtitle: t("supervisors.supervisor8.subtitle"),
            description: t("supervisors.supervisor8.description"),
            image: "/DrRaeda.png",
        },
        {
            name: t("supervisors.supervisor9.name"),
            title: "",
            subtitle: t("supervisors.supervisor9.subtitle"),
            description: t("supervisors.supervisor9.description"),
            image: "/DrLubna.png",
        },
        {
            name: t("supervisors.supervisor10.name"),
            title: "",
            subtitle: t("supervisors.supervisor10.subtitle"),
            description: t("supervisors.supervisor10.description"),
            image: "/DrKamal.png",
        },
    ]

    const renderCards = (items: Trainers[]) => (
        <Box sx={cardsWrapper}>
            {items.map((person, index) => (
                <Card key={index} sx={card}>
                    <CardContent sx={cardContent}>
                        <Box sx={textWrapper}>
                            <CardMedia
                                component="img"
                                image={person.image}
                                alt={person.name}
                                sx={image}
                            />

                            <Typography variant="h6" sx={nameText}>
                                {person.name}
                            </Typography>

                            <Typography variant="subtitle2" sx={subtitleText}>
                                {person.subtitle}
                            </Typography>

                            <Typography variant="body2" sx={descriptionText}>
                                {person.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )

    return (
        <Box sx={pageWrapper}>
            <Typography variant="h3" sx={sectionTitle(5)}>
                {t('sections.partners')}
            </Typography>
            {renderCards(partners)}

            <Typography variant="h4" sx={sectionTitle(5)}>
                {t('sections.guests')}
            </Typography>
            {renderCards(guests)}

            <Typography variant="h3" sx={sectionTitle(5)}>
                {t('sections.speakers_name')}
            </Typography>
            {renderCards(speakers)}

            <Typography variant="h3" sx={sectionTitle(5)}>
                {t('sections.supervisors')}
            </Typography>
            {renderCards(supervisors)}
        </Box>

    )
}