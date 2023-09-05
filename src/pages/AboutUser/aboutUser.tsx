import { RHF } from "../../componets/RHF";
import { useAppSelector } from "../../redux/store/hooks";

export const AboutUser = () => {
    const selectedUser = useAppSelector(state => state.users.allUsers)
    return (
        <div>
            {selectedUser.map(user => <RHF key={user.id} user={user} />)}
        </div>

    );
};

