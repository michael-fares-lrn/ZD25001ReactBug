import Assessment from "./client/assessment";
import { getAssessment } from "./server/data";

export default async function AssessmentPage() {
 
    const signedRequest = await getAssessment();
    return (
        <>
            <h1 className="text-center">A simple React JS component that loads the Learnosity Assessment Player.</h1>
            <Assessment signedRequest={signedRequest} />
        </>
    );
}
