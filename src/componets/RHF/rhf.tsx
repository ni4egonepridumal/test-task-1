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
        watch,
        formState: { errors },
        control
    } = useForm()

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
                    <input defaultValue={user.name} {...register("Name", { disabled: disabledFromLokalState })} />
                    {errors.Name && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}>
                    <label>User name</label>
                    <input defaultValue={user.username} {...register("userName", { disabled: disabledFromLokalState, required: true })} />
                    {errors.userName && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}>
                    <label>E-mail</label>
                    <input defaultValue={user.email} {...register("email", { disabled: disabledFromLokalState, required: true })} />
                    {errors.email && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}>
                    <label>Street</label>
                    <input defaultValue={user.address.street} {...register("street", { disabled: disabledFromLokalState, required: true })} />
                    {errors.street && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}>
                    <label>City</label>
                    <input defaultValue={user.address.city} {...register("city", { disabled: disabledFromLokalState, required: true })} />
                    {errors.city && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}> <label>Zip code</label>
                    <input defaultValue={user.address.zipcode} {...register("zipCode", { disabled: disabledFromLokalState, required: true })} />
                    {errors.zipCode && <span>Это поле обязательно к заполнению</span>}</div>
                <div className={styles.input}>
                    <label>Phone</label>
                    <input defaultValue={user.phone} {...register("phone", { disabled: disabledFromLokalState, required: true })} />
                    {errors.phone && <span>Это поле обязательно к заполнению</span>}
                </div>
                <div className={styles.input}>
                    <label>Website</label>
                    <input defaultValue={user.website} {...register("website", { disabled: disabledFromLokalState, required: true })} />
                    {errors.website && <span>Это поле обязательно к заполнению</span>}
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

