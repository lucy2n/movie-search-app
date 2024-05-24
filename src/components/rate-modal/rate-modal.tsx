import { Divider, Modal, Rating, Text, Button } from "@mantine/core"
import style from './rate-modal.module.css';
import { useState, useEffect } from "react";

interface RateModalProps {
    opened: boolean;
    close: () => void;
    filmId: string;
    filmTitle: string;
    updateRating: () => void;
}

export const RateModal = ({ opened, close, filmId, filmTitle, updateRating }: RateModalProps): JSX.Element => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const savedRating = localStorage.getItem(`movie-rating-${filmId}`);
        if (savedRating) {
          setRating(parseInt(savedRating, 10));
        }
    }, [filmId]);

    const addRating = () => {
        localStorage.setItem(`movie-rating-${filmId}`, rating + '');
        updateRating();
        close();
    };

    const deleteRating = () => {
        setRating(0);
        localStorage.removeItem(`movie-rating-${filmId}`);
        updateRating();
        close();
    };

    return (
        <Modal radius={10} opened={opened} onClose={close} title="Your rating" centered>
            <Divider my="xs" />
            <div className={style.modal}>
                <Text c="dark" fw={700}>
                    {filmTitle}
                </Text>
                <Rating
                    className={style.modal__rating}
                    count={10}
                    value={rating} 
                    onChange={setRating}
                    size="xl"
                >
                </Rating>
                <div className={style.modal__buttons}>
                    <Button variant="filled" radius={5} onClick={addRating}>
                        Save
                    </Button>
                    <Button variant="transparent" radius={5} onClick={deleteRating}>
                        Remove rating
                    </Button>
                </div>
            </div>
      </Modal>
    )
}