import React from "react";
import styles from "./rhf.module.scss";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../componets/button";


interface IPropsUser {
    user: InputsForm
}

interface InputsForm {
    name: string,
    username: string,
    email: string,
    address: {
        city: string,
        street: string,
        zipcode: string,
    },
    phone: string,
    website: string,
    comment?: string,
}

export const RHF = ({ user }: IPropsUser) => {

    const [disabledFromLokalState, setDisabled] = React.useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all"
    })


    const onSubmit: SubmitHandler<InputsForm> = (data: InputsForm) => console.log(JSON.stringify(data))

    const handleDisabled = () => {
        setDisabled(!disabledFromLokalState)
    }
    return (
        <div className={styles.aboutUser_inner}>
            <div className={styles.head}>
                <p className={styles.aboutUser}>Профиль пользователя</p>
                <Button color="purple" onClick={handleDisabled}>Редактировать</Button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Name</label>
                    <input defaultValue={user.name} {...register("Name", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z\s]{1,20}$/,
                            message: "Имя не должно быть длинее 20 символов и содержит только буквы"
                        }
                    })} />
                    {errors.Name && <span>{errors.Name.message}</span>}
                </div>
                <div className={styles.input}>
                    <label>User name</label>
                    <input defaultValue={user.username} {...register("userName", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z0-9]{1,20}$/,
                            message: "Никнейм не должно быть длинее 20 символов"
                        }
                    })} />
                    {errors.userName && <span>{errors.userName.message}</span>}
                </div>
                <div className={styles.input}>
                    <label>E-mail</label>
                    <input defaultValue={user.email} {...register("email", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: 'Некорректно введен почтовый адрес, пример: example@mail.ru'
                        }
                    })} />
                    {errors.email && <span>{errors.email.message}</span>}

                </div>
                <div className={styles.input}>
                    <label>Street</label>
                    <input defaultValue={user.address.street} {...register("street", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                            message: "Некорректно введенна улица, пример: Домашняя"
                        }
                    })} />
                    {errors.street && <span>{errors.street.message}</span>}
                </div>
                <div className={styles.input}>
                    <label>City</label>
                    <input defaultValue={user.address.city} {...register("city", {
                        disabled: disabledFromLokalState,
                        required: true,
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                            message: "Некорректно введён город, пример: Воркута"
                        }
                    })} />
                    {errors.city && <span>{errors.city.message}</span>}
                </div>
                <div className={styles.input}> <label>Zip code</label>
                    <input defaultValue={user.address.zipcode} {...register("zipCode", {
                        disabled: disabledFromLokalState,
                        required: true,
                        pattern: {
                            value: /^[0-9]+[0-9]*$/,
                            message: "Используйте только цифры, без доп знаков, пример: 740000"
                        }
                    })} />
                    {errors.zipCode && <span>{errors.zipCode.message}</span>}
                </div>
                <div className={styles.input}>
                    <label>Phone</label>
                    <input defaultValue={user.phone} {...register("phone", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^((\+7|7|8)+([0-9]){10})$/,
                            message: "Введите кореектный номер телефона по образцу +79505050500"
                        }
                    })} />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div className={styles.input}>
                    <label>Website</label>
                    <input defaultValue={user.website} {...register("website", {
                        disabled: disabledFromLokalState,
                        required: "Это поле обязательно к заполнению",
                        pattern: {
                            value: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                            message: "Введите корректный адрес сайта: www.some-site.com"
                        }
                    })} />
                    {errors.website && <span>{errors.website.message}</span>}
                </div>
                <div >
                    <label>Comment</label>
                    <br />
                    <input className={styles.comment} {...register("comment", { disabled: disabledFromLokalState })} />
                    {errors.exampleRequired && <span>Это поле обязательно к заполнению</span>}
                    <Button disabled={disabledFromLokalState} color={disabledFromLokalState ? 'lightGray' : 'green'}>Отправить</Button>
                </div>
            </form>
        </div>
    );
};

