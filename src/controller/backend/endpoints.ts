import Endpoint from "../../model/Endpoint";

const hostUrl = "https://36a4a4bb-50fa-4883-a3ee-e24cc1bf795d.mock.pstmn.io";

export const coursesEndpoint: Endpoint = {
    method: "GET",
    url: `${hostUrl}/courses`
};