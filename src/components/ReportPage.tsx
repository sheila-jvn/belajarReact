import React from "react";
import ReportForm from "./FormComponent";
import List from "./FormListComponent";

const ReportPage: React.FC = () => {
    return (
        <div>
            <ReportForm />
            <List />
        </div>
    );
};

export default ReportPage;