import { Divider, Modal, Rating, Text, Button } from "@mantine/core"
import style from './rate-modal.module.css';
import { useState, useEffect } from "react";

export default function RateModal ({opened, close, film, updateRating}) {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const savedRating = localStorage.getItem(`movie-rating-${film.id}`);
        if (savedRating) {
          setRating(parseInt(savedRating, 10));
        }
    }, [film.id]);

    const addRating = () => {
        localStorage.setItem(`movie-rating-${film.id}`, rating + '');
        updateRating();
        close()
    };

    const deleteRating = () => {
        setRating(0)
        localStorage.removeItem(`movie-rating-${film.id}`);
        close()
    };

    return (
        <Modal radius={10} opened={opened} onClose={close} title="Your rating" centered>
            <Divider my="xs" />
            <div className={style.modal}>
                <Text c="dark" fw={700}>
                    {film.original_title}
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