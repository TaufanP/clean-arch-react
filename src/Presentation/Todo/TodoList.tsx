import { DependenciesOf, injectComponent } from "react-obsidian";
import { CounterGraph } from "../../Domain/DependencyInjection/TodoRepoGraph";

type Props = DependenciesOf<CounterGraph, "useViewModel" | "model">;

function _TodoList({ useViewModel, model }: Props) {
  console.log(model);

  return <fieldset />;
}

export const TodoList = injectComponent(_TodoList, CounterGraph);
