import CardList from "@/components/reusable/card/card-list";
import { IUser, ListTypeEnum, USER_TYPE_ENUM } from "@/types";
import UserBadges from "../user-badges";
import UserBreadcrumbs from "../user-breadcrumbs";
import UserInfo from "../user-info";
import UserCard from "../user-card";
import AppLineChart from "@/components/charts/app-line-chart";

const SingleUserView = () => {
  const user: IUser | undefined = {
    username: "john.doe",
    email: "john.doe@gmail.com",
    phone: "+1 234 5678",
    location: "New York, NY",
    role: USER_TYPE_ENUM.USER,
    createdAt: "2025.01.01",
  };
  return (
    <div>
      {/* BREADCRUMBS */}
      <UserBreadcrumbs />
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <UserBadges />
          </div>
          {/* INFORMATION CONTAINER*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <UserInfo user={user} />
          </div>
          {/* CARD LIST*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList
              title="Recent Transaction"
              type={ListTypeEnum.LATEST_TRANSACTIONS}
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <UserCard />
          </div>
          {/* CHART CONTAINER*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserView;
