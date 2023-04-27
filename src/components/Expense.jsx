import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

import SavingIcon from "../img/saving_icon.svg";
import HomeIcon from "../img/home_icon.svg";
import FoodIcon from "../img/food_icon.svg";
import ExpensesIcon from "../img/expenses_icon.svg";
import LeisureIcon from "../img/leisure_icon.svg";
import HealthIcon from "../img/health_icon.svg";
import SubscriptionsIcon from "../img/subscriptions_icon.svg";

const iconDictionary = {
  savings: SavingIcon,
  food: FoodIcon,
  home: HomeIcon,
  expenses: ExpensesIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon,
};

export const Expense = ({ expense }) => {
  const { category, name, amount, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log("Edit")}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("Delete")} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          <div className="expense-content">
            <img src={iconDictionary[category]} alt="Expense Icon" />
            <div className="expense-description">
              <p className="category">{category}</p>
              <p className="expense-name">{name}</p>
              <p className="expense-date">
                Added on: {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="expense-amount">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
