"use client";
import * as changeCase from "change-case";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
const options = [
  "camelCase",
  "capitalCase",
  "constantCase",
  "dotCase",
  "kebabCase",
  "noCase",
  "pascalCase",
  "pascalSnakeCase",
  "pathCase",
  "sentenceCase",
  "snakeCase",
  "trainCase",
];
function Stringconvertor() {
  const [selectedoption, setSelectedoption] = React.useState("camelCase");
  const [stringtext, setStringtext] = React.useState("");
  const [changestext, setChangestext] = React.useState(stringtext);
  React.useEffect(() => {
    ValueChanged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedoption, stringtext]);

  function ValueChanged() {
    switch (selectedoption) {
      case "camelCase": {
        setChangestext(changeCase.camelCase(stringtext));
        break;
      }
      case "capitalCase": {
        setChangestext(changeCase.capitalCase(stringtext));
        break;
      }
      case "constantCase": {
        setChangestext(changeCase.constantCase(stringtext));
        break;
      }
      case "dotCase": {
        setChangestext(changeCase.dotCase(stringtext));
        break;
      }
      case "kebabCase": {
        setChangestext(changeCase.kebabCase(stringtext));
        break;
      }
      case "noCase": {
        setChangestext(changeCase.noCase(stringtext));
        break;
      }
      case "pascalCase": {
        setChangestext(changeCase.pascalCase(stringtext));

        break;
      }
      case "pascalSnakeCase": {
        setChangestext(changeCase.pascalSnakeCase(stringtext));
        break;
      }
      case "pathCase": {
        setChangestext(changeCase.pathCase(stringtext));
        break;
      }
      case "sentenceCase": {
        setChangestext(changeCase.sentenceCase(stringtext));
        break;
      }
      case "snakeCase": {
        setChangestext(changeCase.snakeCase(stringtext));
        break;
      }
      case "trainCase": {
        setChangestext(changeCase.trainCase(stringtext));
        break;
      }
      default:
        console.log("Case is not set");
        break;
    }
  }
  function clear() {
    setStringtext("");
    setChangestext("");
  }
  function handelChange(value: string) {
    console.log("value changed", value);
    console.log("value changed2", stringtext);
    setStringtext(value);
    console.log("value changed3", stringtext);
    ValueChanged();
  }

  return (
    <div>
      <h2 className="text-3xl text-violet-500">String Case convertor</h2>
      <div className="flex justify-center p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="p-6 text-lg capitalize">
              <p>: </p>
              {selectedoption}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Case Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedoption}
              onValueChange={setSelectedoption}
            >
              {options.map((option) => (
                <DropdownMenuRadioItem key={option} value={option}>
                  {option}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-6">
        <div className="grid w-full gap-1.5">
          <div className="flex justify-between">
            <Label htmlFor="input" className="text-2xl">
              Input:
            </Label>
            <Button variant="secondary" onClick={clear}>
              Clear
            </Button>
          </div>
          <Textarea
            placeholder="hello hi how are you"
            value={stringtext}
            onChange={($event) => {
              handelChange($event.target.value);
            }}
            id="input"
            className="h-screen text-lg"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <div className="flex justify-between">
            <Label htmlFor="output" className="text-2xl">
              Output:
            </Label>
            <Button
              onClick={($event) => {
                navigator.clipboard.writeText(changestext);
                console.log("textcopied");
              }}
            >
              Copy
            </Button>
          </div>
          <Textarea
            placeholder="helloHiHowAreYou"
            value={changestext}
            id="output"
            className="h-screen text-lg"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default Stringconvertor;
