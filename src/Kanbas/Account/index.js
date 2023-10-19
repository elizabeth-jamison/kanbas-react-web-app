import KanbasNavigation from "../KanbasNavigation";

function Account() {
    return (
        <div className="row no-gutters">
            <div className="col-1" style={{width:85}}>
                <KanbasNavigation />
            </div>
            <div className="col">
                <h1 className="ms-2">Account</h1>
            </div>
        </div>
    )
}
export default Account;