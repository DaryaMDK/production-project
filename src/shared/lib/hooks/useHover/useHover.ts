import { useCallback, useState, useMemo } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    setIsHover(true);

    const onMouseEnter = useCallback(() => {
        setIsHover(false);
    }, []);

    const onMouseLeave = useCallback(() => {

    }, []);

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};
