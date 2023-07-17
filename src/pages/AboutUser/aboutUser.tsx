import React from "react";
import styles from "./aboutUser.module.scss";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../componets/button";
import { useAppSelector } from "../../redux/store/hooks";

// type Inputs = {
//     example: string
//     exampleRequired: string
// }

interface InputsForm {
    name: string,
    userName: string,
    email: string,
    street: string,
    city: string,
    zipCode: string,
    phone: string,
    website: string,
    comment: string,
}

export const AboutUser = () => {
    const [disabledFromLokalState, setDisabled] = React.useState<boolean>(true);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<InputsForm> = (data) => console.log(JSON.stringify(data))

    const handleDisabled = () => {
        setDisabled(!disabledFromLokalState)
    }
    const dataFromRedux = useAppSelector(state => state)
    console.log("Данные для формы, которые приходят из редакса", dataFromRedux)
    return (
        <div className={styles.aboutUser_inner}>
            <div className={styles.head}>
                <p className={styles.aboutUser}>Профиль пользователя</p>
                <Button color="purple" onClick={handleDisabled}>Редактировать</Button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Name</label>
                    <input defaultValue="Иванов" {...register("Name", { disabled: disabledFromLokalState })} />
                </div>
                <div className={styles.input}>
                    <label>User name</label>
                    <input {...register("user name", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className={styles.input}>
                    <label>E-mail</label>
                    <input {...register("email", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className={styles.input}>
                    <label>Street</label>
                    <input {...register("street", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className={styles.input}>
                    <label>City</label>
                    <input {...register("city", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className={styles.input}> <label>Zip code</label>
                    <input {...register("zipCode", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}</div>
                <div className={styles.input}>
                    <label>Phone</label>
                    <input {...register("phone", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className={styles.input}>
                    <label>Website</label>
                    <input {...register("website", { disabled: disabledFromLokalState, required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div >
                    <label>Comment</label>
                    <br />
                    <input className={styles.comment} {...register("comment", { disabled: disabledFromLokalState })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className={styles.submit} type="submit" />
                </div>

            </form>

        </div>
    );
};

