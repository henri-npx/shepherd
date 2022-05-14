// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Factory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Factory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Factory", id.toString(), this);
    }
  }

  static load(id: string): Factory | null {
    return changetype<Factory | null>(store.get("Factory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vaultCount(): i32 {
    let value = this.get("vaultCount");
    return value!.toI32();
  }

  set vaultCount(value: i32) {
    this.set("vaultCount", Value.fromI32(value));
  }

  get vaults(): Array<string> {
    let value = this.get("vaults");
    return value!.toStringArray();
  }

  set vaults(value: Array<string>) {
    this.set("vaults", Value.fromStringArray(value));
  }
}

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vault entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Vault must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Vault", id.toString(), this);
    }
  }

  static load(id: string): Vault | null {
    return changetype<Vault | null>(store.get("Vault", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get factory(): string {
    let value = this.get("factory");
    return value!.toString();
  }

  set factory(value: string) {
    this.set("factory", Value.fromString(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    return value!.toBytes();
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get deposits(): Array<string> {
    let value = this.get("deposits");
    return value!.toStringArray();
  }

  set deposits(value: Array<string>) {
    this.set("deposits", Value.fromStringArray(value));
  }

  get rebalances(): Array<string> {
    let value = this.get("rebalances");
    return value!.toStringArray();
  }

  set rebalances(value: Array<string>) {
    this.set("rebalances", Value.fromStringArray(value));
  }

  get redemptions(): Array<string> {
    let value = this.get("redemptions");
    return value!.toStringArray();
  }

  set redemptions(value: Array<string>) {
    this.set("redemptions", Value.fromStringArray(value));
  }

  get managementFeesHarvests(): Array<string> {
    let value = this.get("managementFeesHarvests");
    return value!.toStringArray();
  }

  set managementFeesHarvests(value: Array<string>) {
    this.set("managementFeesHarvests", Value.fromStringArray(value));
  }

  get performanceFeesHarvests(): Array<string> {
    let value = this.get("performanceFeesHarvests");
    return value!.toStringArray();
  }

  set performanceFeesHarvests(value: Array<string>) {
    this.set("performanceFeesHarvests", Value.fromStringArray(value));
  }
}

export class Share extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Share entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Share must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Share", id.toString(), this);
    }
  }

  static load(id: string): Share | null {
    return changetype<Share | null>(store.get("Share", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Deposit must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Deposit", id.toString(), this);
    }
  }

  static load(id: string): Deposit | null {
    return changetype<Deposit | null>(store.get("Deposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get netAmountOut(): BigInt {
    let value = this.get("netAmountOut");
    return value!.toBigInt();
  }

  set netAmountOut(value: BigInt) {
    this.set("netAmountOut", Value.fromBigInt(value));
  }

  get toMint(): BigInt {
    let value = this.get("toMint");
    return value!.toBigInt();
  }

  set toMint(value: BigInt) {
    this.set("toMint", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Redeem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Redeem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Redeem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Redeem", id.toString(), this);
    }
  }

  static load(id: string): Redeem | null {
    return changetype<Redeem | null>(store.get("Redeem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get amountIn(): BigInt {
    let value = this.get("amountIn");
    return value!.toBigInt();
  }

  set amountIn(value: BigInt) {
    this.set("amountIn", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Rebalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rebalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rebalance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rebalance", id.toString(), this);
    }
  }

  static load(id: string): Rebalance | null {
    return changetype<Rebalance | null>(store.get("Rebalance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get signals(): Array<BigInt> {
    let value = this.get("signals");
    return value!.toBigIntArray();
  }

  set signals(value: Array<BigInt>) {
    this.set("signals", Value.fromBigIntArray(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class HarvestManagementFees extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save HarvestManagementFees entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HarvestManagementFees must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HarvestManagementFees", id.toString(), this);
    }
  }

  static load(id: string): HarvestManagementFees | null {
    return changetype<HarvestManagementFees | null>(
      store.get("HarvestManagementFees", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get fromHarvester(): Bytes | null {
    let value = this.get("fromHarvester");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set fromHarvester(value: Bytes | null) {
    if (!value) {
      this.unset("fromHarvester");
    } else {
      this.set("fromHarvester", Value.fromBytes(<Bytes>value));
    }
  }

  get feesToDAO(): BigInt {
    let value = this.get("feesToDAO");
    return value!.toBigInt();
  }

  set feesToDAO(value: BigInt) {
    this.set("feesToDAO", Value.fromBigInt(value));
  }

  get feesToStrategist(): BigInt {
    let value = this.get("feesToStrategist");
    return value!.toBigInt();
  }

  set feesToStrategist(value: BigInt) {
    this.set("feesToStrategist", Value.fromBigInt(value));
  }
}

export class HarvestPerformanceFees extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save HarvestPerformanceFees entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HarvestPerformanceFees must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HarvestPerformanceFees", id.toString(), this);
    }
  }

  static load(id: string): HarvestPerformanceFees | null {
    return changetype<HarvestPerformanceFees | null>(
      store.get("HarvestPerformanceFees", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value!.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get fromHarvester(): Bytes | null {
    let value = this.get("fromHarvester");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set fromHarvester(value: Bytes | null) {
    if (!value) {
      this.unset("fromHarvester");
    } else {
      this.set("fromHarvester", Value.fromBytes(<Bytes>value));
    }
  }

  get feesToDAO(): BigInt {
    let value = this.get("feesToDAO");
    return value!.toBigInt();
  }

  set feesToDAO(value: BigInt) {
    this.set("feesToDAO", Value.fromBigInt(value));
  }

  get feesToStrategist(): BigInt {
    let value = this.get("feesToStrategist");
    return value!.toBigInt();
  }

  set feesToStrategist(value: BigInt) {
    this.set("feesToStrategist", Value.fromBigInt(value));
  }
}
