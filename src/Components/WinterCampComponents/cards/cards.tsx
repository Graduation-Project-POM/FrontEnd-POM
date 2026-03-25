import { Box, CardContent, Typography, Chip, IconButton, CardMedia } from "@mui/material";
import { LocationOn, ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import { cardStyles } from "./Cards";

const students = [
  { name: "محمد  شبيطة", country: "قلقيلية", image: "../s1.jpg", school: "مدرسة ذكور عزون الثانوية" },
  { name: "جورجي قسيس", country: "بيت لحم", image: "../s2.jpg", school: "المدرسة الإنجيلية اللوثرية  " },
  { name: "يحيى  جرادات", country: "جنين", image: "../s3.jpg", school: "ذكور ثانوية السيلة الحارثية" },
  { name: "ابراهيم شتيوي", country: "أريحا", image: "../s4.jpg", school: "بنات عمران" },
  { name: "سما شنطي", country: "قلقيلية", image: "../s5.jpeg", school: "بنات أبو علي إياد الثانوية" },
  { name: "كمال دحيدل", country: "شمال الخليل حلحول", image: "../s6.jpg", school: "ثانوية حلحول للبنين" },
  { name: "غنى ابو بكر", country: "طولكرم", image: "../s7.jpg", school: "بنات العدوية الثانوية" },
  { name: "يونس السلامين", country: "جنوب الخليل", image: "../s8.jpg", school: "ذكور السموع الثانوية" },
  { name: "زيان شوارب", country: "طولكرم", image: "../s9.jpg", school: "مدرسة بنات نزلة عيسى الثانوية" },
  { name: "شادن ابو عصبي", country: "سلفيت", image: "../s10.jpg", school: "بنات رافات الثانوية" },
  { name: "ادهم نجاجرة", country: "بيت لحم", image: "../s11.jpg", school: "الفرير الثانوية المختلطة" },
  { name: "معتصم شتيوي", country: "جنوب نابلس", image: "../s12.jpg", school: "حوارة الثانوية للبنين" },
  { name: "عبد الرحمن شلش", country: "مديرية بيرزيت", image: "../s13.jpg", school: "الأكاديمية العربية للتعليم الحديث" },
  { name: "محمدالعدوس", country: "أريحا", image: "../s14.jpg", school: "بنات عمران" },
  { name: "محمد سمارة", country: "بيرزيت", image: "../s15.jpg", school: "الأكاديمية العربية للتعليم الحديث" },
  { name: "أبي عقيلي", country: "جنوب الخليل", image: "../s16.jpg", school: "مدرسة ذكور الشهيد ماجد ابو شرار" },
  { name: "نور أبو غْضيب", country: "مديرية نابلس", image: "../s17.jpg", school: "العائشية الثانوية للبنات" },
  { name: "سلمى صفدي", country: "جنوب نابلس", image: "../s18.jpg", school: "بنات عوريف الثانوية" },
  { name: "سديل النجار", country: "مديرية جنوب الخليل", image: "../s19.jpg", school: "مدرسة حفصة بنت عمر الثانوية" },
  { name: "دينه نيروخ", country: "وسط الخليل", image: "../s20.jpg", school: "وداد ناضر الدين الثانوية للبنات" },
  { name: "جنان عودة", country: "نابلس", image: "../s21.jpg", school: "العائشية الثانوية للبنات" },
  { name: "محمد الرجعي", country: "جنوب الخليل", image: "../s22.jpg", school: "الشهيد ماجد ابو شرار الثانوية" },
  { name: "ريماس بني عودة", country: "طوباس", image: "../s23.jpg", school: "طمون الثانوية" },
  { name: "لين العرعر", country: "شمال الخليل", image: "../s24.jpg", school: "صوريف الثانوية للبنات" },
  { name: "رنا كلبونة", country: "نابلس", image: "../s25.jpg", school: "طلائع الأمل" },
  { name: "ادم عويس", country: "جنوب نابلس", image: "../s26.jpg", school: "الساوية اللبن الثانوية للبنين" },
  { name: "محمد دغامين", country: "جنوب الخليل", image: "../s27.jpg", school: "ذكور البخاري الأساسية" },
  { name: "لانا نور", country: "مديرية التربية والتعليم طولكرم", image: "../s28.jpg", school: "مدرسة بنات عنبتا الثانوية" },
  { name: " رامي أبو كرش", country: "جنوب الخليل", image: "../s29.jpg", school: "ذكور السموع الثانوية" },
  { name: "أيهم اصبيح", country: "يطا", image: "../s30.jpg", school: "ذكور ابو علي اياد الثانوية" },
  { name: "سيف ابوكشك", country: "رام الله", image: "../s31.jpg", school: "سيدة البشارة للروم الكاثوليك" },
  { name: "احمد مرار", country: "رام الله-البيرة", image: "../s32.jpg", school: "الكلية الاهلية رام الله" },
  { name: "سارة دواس", country: "طوباس", image: "../s33.jpg", school: "بنات طوباس الثانوية" },
  { name: "جود عبيد", country: "قباطية", image: "../s34.jpg", school: "مدرسة بنات سامي طه الثانوية" },
  { name: "لجين عجرة", country: "بيت لحم", image: "../s35.jpg", school: "الراعي الصالح السويدية" },
  { name: "بتول زكريا", country: "نابلس", image: "../s36.jpg", school: "المدارس العلمية البريطانية" },
  { name: "خليل جبران", country: "القدس", image: "../s37.jpg", school: "المعهد العربي" },
  { name: "تاليا عبيد", country: "نابلس", image: "../s38.jpg", school: "طلائع الأمل" },
  { name: "ياسمين اشقر", country: "نابلس", image: "../s39.jpg", school: "طلائع الأمل" },
  { name: "محمد علي", country: "مديرية جنوب نابلس", image: "../s40.jpg", school: "مدرسة جماعين الثانوية للبنين" },
  { name: "عمرو أبو صفيه", country: "بيرزيت", image: "../s41.jpg", school: "أكاديمية روابي الإنجليزية" },
  { name: "معتز الحميدي", country: "أريحا", image: "../s42.jpg", school: "تيراسنطا-الثانوية" },
  { name: "ليالي صبيح", country: "بيت لحم", image: "../s43.jpg", school: "بنات بيت لحم الثانوية" },
  { name: "ديالى عياش", country: "ضواحي القدس", image: "../s44.jpg", school: "بنات الأموية الثانوية" },
  { name: "ندى غنام", country: "طوباس", image: "../s45.jpg", school: "المدرسة الخضراء" },
];


export default function StudentCards() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleScroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -340 : 340,
            behavior: "smooth",
        });
    };

    return (
        <Box>
            <Typography variant="h3" sx={cardStyles.title}>
                أبطال أولمبياد الرياضيات الفلسطيني 2026
            </Typography>

            <Box sx={{ position: "relative", p: 3 }}>
                <IconButton onClick={() => handleScroll("left")} sx={{ position: "absolute", left: 0, top: "50%", zIndex: 2 }}>
                    <ArrowBackIosNew />
                </IconButton>

                <Box
                    ref={sliderRef}
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        overflowY: "visible",
                        scrollBehavior: "smooth",
                        py: 4,
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {students.map((s, idx) => (
                        <Box key={idx} sx={cardStyles.card}>
                            <CardMedia
                                component="img"
                                image={s.image}
                                alt={s.name}
                                sx={{
                                    width: 100,                
                                    height: 100,
                                    borderRadius: "50%",       
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: -50,                 
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                    zIndex: 1,
                                }}
                            />
                            <CardContent sx={cardStyles.cardContent}>
                                <Typography variant="h6" fontWeight={700} sx={cardStyles.name}>
                                    {s.name}
                                </Typography>
                                <Chip label={s.school} size="small" sx={cardStyles.chip}  />
                                <Box sx={cardStyles.countryBox}>
                                    <LocationOn sx={cardStyles.locationIcon} />
                                    <Typography variant="body2" color="text.secondary">
                                        {s.country}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                    ))}
                </Box>

                <IconButton onClick={() => handleScroll("right")} sx={{ position: "absolute", right: 0, top: "50%", zIndex: 2 }}>
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
}