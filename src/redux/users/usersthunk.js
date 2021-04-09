import { actions} from "./const";
import { GETALLUSERS, BLOCKUSERSLIST, UNBLOCKUSERSLIST, DELETEUSERSLIST } from "../../const/api";
import { request } from "../../services/requests";

export const getAllUsers = () => {
	return (dispach) => {
		request(
			{
				url: GETALLUSERS,
				method: "GET",
			},
			false
		)
			.then(({ data }) => {
				dispach({
					type: actions.login,
					payload: {
						id: data.id,
						username: data.username,
					},
				});
			})
			.catch(() => {
				localStorage.clear();
			});
	};
};