import AppAreaChart from "@/components/charts/app-area-chart";
import AppBarChart from "@/components/charts/app-bar-chart";
import AppPieChart from "@/components/charts/app-pie-chart";
import CardList from "@/components/reusable/card/card-list";
import TodoList from "@/components/todos/todo-list";
import { ListTypeEnum } from "@/types";

const DashboardView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 md:h-[calc(100vh-68px)] md:overflow-y-scroll md:pr-4 pb-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList
          title={"Popular Content"}
          type={ListTypeEnum.LATEST_TRANSACTIONS}
        />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1">
        <CardList
          title={"Latest Transactions"}
          type={ListTypeEnum.POPULAR_CONTENT}
        />
      </div>
    </div>
  );
};

export default DashboardView;
