import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import cls from './ErrorPage.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <Text text={t('Произошла непредвиденная ошибка')} variant="error" />
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
