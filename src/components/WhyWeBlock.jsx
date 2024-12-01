import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box id="whyWe" sx={{
            scrollMarginTop: { xs: '120px', sm: '50px' },
            paddingX: { xs: '10px', lg: 0 },
            paddingY: { xs: '25px', sm: '50px' },
            color: 'var(--black)'
        }}>

            <Typography variant="h4"
                        sx={{ marginBottom: '20px', fontSize: { xs: '28px', sm: '34px' }, fontWeight: 500 }}>
                Почему именно мы?
            </Typography>
            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                Наше компания специализируется на организации госпитализаций по всей Москве и Московской области,
                обеспечивая глубокое знание текущей ситуации как с ведущими медицинскими клиниками, так и конкретных
                врачей-специалистов. Мы располагаем актуальной информацией о стоимости размещения в частных палатах
                различных учреждений здравоохранения. Наша компетенция охватывает выбор стационаров по профилю пациента
                и оптимизацию процесса госпитализации с учетом индивидуальных потребностей.
            </Typography>
            <Typography component="p" sx={{ fontSize: 20 }}>
                В случае отказа в госпитализации, мы оперативно вступаем на сцену, используя наши связи и знания.
                Особое внимание уделяется особенностям медицинского обслуживания пожилых людей – для них предусмотрен
                непрерывный профессиональный уход круглосуточно семь дней в неделю.
            </Typography>
            <Typography component="p" sx={{ fontSize: 20 }}>
                Наш подход к каждому клиенту исключительно индивидуален, обеспечивая максимальное соответствие всем
                требованиям и условиям.
            </Typography>
        </Box>
    );
};
