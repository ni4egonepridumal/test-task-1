import React from "react";
import styles from "./rhf.module.scss";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../componets/button";
import { IUser } from "../../types";


interface IPropsUser {
    user: IUser
}

interface inputForm {
    city: string,
    comment?: string,
    email: string,
    name: string,
    phone: string,
    street: string,
    userName: string,
    website: string,
    zipCode: string,
}


export const RHF = ({ user }: IPropsUser) => {

    const [disabledFromLokalState, setDisabled] = React.useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            name: user.name,
            userName: user.username,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipCode: user.address.zipcode,
            phone: user.phone,
            website: user.website,
            comment: user.comment,
        }
    })

    const onSubmit: SubmitHandler<inputForm> = (data: inputForm) => console.log(JSON.stringify(data));

    const handleDisabled = () => {
        setDisabled(!disabledFromLokalState)
    }
    return (
        <div className={styles.aboutUser_inner}>
            <div className={styles.head}>
                <p className={styles.aboutUser}>Профиль пользователя</p>
                <Button color="purple" onClick={handleDisabled}>Редактировать</Button>
            </div>
            <form className={styles.form} onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)
            }>
                <div className={styles.input}>
                    <label>Name</label>
                    <input
                        {...register("name", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z\s]{1,20}$/,
                                message: "Имя не должно быть длинее 20 символов и содержит только буквы"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors?.name && errors.name.message}</span>
                </div>
                <div className={styles.input}>
                    <label>User name</label>
                    <input
                        {...register("userName", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z0-9]{1,20}$/,
                                message: "Никнейм не должно быть длинее 20 символов"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.userName && errors.userName.message}</span>
                </div>
                <div className={styles.input}>
                    <label>E-mail</label>
                    <input
                        {...register("email", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                message: 'Некорректно введен почтовый адрес, пример: example@mail.ru'
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.email && errors.email.message}</span>

                </div>
                <div className={styles.input}>
                    <label>Street</label>
                    <input
                        {...register("street", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z\s]+$/,
                                message: "Некорректно введенна улица, пример: Домашняя"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.street && errors?.street?.message}</span>
                </div>
                <div className={styles.input}>
                    <label>City</label>
                    <input
                        {...register("city", {
                            disabled: disabledFromLokalState,
                            required: true,
                            pattern: {
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                                message: "Некорректно введён город, пример: Воркута"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.city && errors.city.message}</span>
                </div>
                <div className={styles.input}> <label>Zip code</label>
                    <input
                        {...register("zipCode", {
                            disabled: disabledFromLokalState,
                            required: true,
                            pattern: {
                                value: /^[0-9]+[0-9]*$/,
                                message: "Используйте только цифры, без доп знаков, пример: 740000"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.zipCode && errors.zipCode.message}</span>
                </div>
                <div className={styles.input}>
                    <label>Phone</label>
                    <input
                        {...register("phone", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^((\+7|7|8)+([0-9]){10})$/,
                                message: "Введите кореектный номер телефона по образцу +79505050500"
                            }
                        })} />
                    <span style={{ color: "red" }}>{errors.phone && errors.phone.message}</span>
                </div>
                <div className={styles.input}>
                    <label>Website</label>
                    <input
                        {...register("website", {
                            disabled: disabledFromLokalState,
                            required: "Это поле обязательно к заполнению",
                            pattern: {
                                value: /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                                message: "Введите корректный адрес сайта: www.some-site.com"
                            }
                        })} />
                    <span style={{ color: "red" }}> {errors.website && errors.website.message}</span>
                </div>
                <div >
                    <label>Comment</label>
                    <br />
                    <input className={styles.comment} {...register("comment", { disabled: disabledFromLokalState })} />
                    <Button disabled={disabledFromLokalState} color={disabledFromLokalState ? 'lightGray' : 'green'}>Отправить</Button>
                </div>
            </form>
        </div>
    );
};

