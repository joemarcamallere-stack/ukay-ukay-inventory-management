import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InventoryItemModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryItemPayload>;
export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null;
    _avg: InventoryItemAvgAggregateOutputType | null;
    _sum: InventoryItemSumAggregateOutputType | null;
    _min: InventoryItemMinAggregateOutputType | null;
    _max: InventoryItemMaxAggregateOutputType | null;
};
export type InventoryItemAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type InventoryItemSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type InventoryItemMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: string | null;
    targetCustomer: string | null;
    subcategory: string | null;
    size: string | null;
    condition: string | null;
    quantity: number | null;
    price: number | null;
    dateAdded: Date | null;
    locationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InventoryItemMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    category: string | null;
    targetCustomer: string | null;
    subcategory: string | null;
    size: string | null;
    condition: string | null;
    quantity: number | null;
    price: number | null;
    dateAdded: Date | null;
    locationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InventoryItemCountAggregateOutputType = {
    id: number;
    name: number;
    category: number;
    targetCustomer: number;
    subcategory: number;
    size: number;
    condition: number;
    quantity: number;
    price: number;
    dateAdded: number;
    locationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InventoryItemAvgAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type InventoryItemSumAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type InventoryItemMinAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    targetCustomer?: true;
    subcategory?: true;
    size?: true;
    condition?: true;
    quantity?: true;
    price?: true;
    dateAdded?: true;
    locationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InventoryItemMaxAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    targetCustomer?: true;
    subcategory?: true;
    size?: true;
    condition?: true;
    quantity?: true;
    price?: true;
    dateAdded?: true;
    locationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InventoryItemCountAggregateInputType = {
    id?: true;
    name?: true;
    category?: true;
    targetCustomer?: true;
    subcategory?: true;
    size?: true;
    condition?: true;
    quantity?: true;
    price?: true;
    dateAdded?: true;
    locationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InventoryItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryItemCountAggregateInputType;
    _avg?: InventoryItemAvgAggregateInputType;
    _sum?: InventoryItemSumAggregateInputType;
    _min?: InventoryItemMinAggregateInputType;
    _max?: InventoryItemMaxAggregateInputType;
};
export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
    [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventoryItem[P]> : Prisma.GetScalarType<T[P], AggregateInventoryItem[P]>;
};
export type InventoryItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithAggregationInput | Prisma.InventoryItemOrderByWithAggregationInput[];
    by: Prisma.InventoryItemScalarFieldEnum[] | Prisma.InventoryItemScalarFieldEnum;
    having?: Prisma.InventoryItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryItemCountAggregateInputType | true;
    _avg?: InventoryItemAvgAggregateInputType;
    _sum?: InventoryItemSumAggregateInputType;
    _min?: InventoryItemMinAggregateInputType;
    _max?: InventoryItemMaxAggregateInputType;
};
export type InventoryItemGroupByOutputType = {
    id: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity: number;
    price: number;
    dateAdded: Date;
    locationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: InventoryItemCountAggregateOutputType | null;
    _avg: InventoryItemAvgAggregateOutputType | null;
    _sum: InventoryItemSumAggregateOutputType | null;
    _min: InventoryItemMinAggregateOutputType | null;
    _max: InventoryItemMaxAggregateOutputType | null;
};
export type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryItemGroupByOutputType[P]>;
}>>;
export type InventoryItemWhereInput = {
    AND?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    OR?: Prisma.InventoryItemWhereInput[];
    NOT?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    id?: Prisma.StringFilter<"InventoryItem"> | string;
    name?: Prisma.StringFilter<"InventoryItem"> | string;
    category?: Prisma.StringFilter<"InventoryItem"> | string;
    targetCustomer?: Prisma.StringFilter<"InventoryItem"> | string;
    subcategory?: Prisma.StringFilter<"InventoryItem"> | string;
    size?: Prisma.StringFilter<"InventoryItem"> | string;
    condition?: Prisma.StringFilter<"InventoryItem"> | string;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    price?: Prisma.FloatFilter<"InventoryItem"> | number;
    dateAdded?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    locationId?: Prisma.StringFilter<"InventoryItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    location?: Prisma.XOR<Prisma.LocationScalarRelationFilter, Prisma.LocationWhereInput>;
};
export type InventoryItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    targetCustomer?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    dateAdded?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    location?: Prisma.LocationOrderByWithRelationInput;
};
export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    OR?: Prisma.InventoryItemWhereInput[];
    NOT?: Prisma.InventoryItemWhereInput | Prisma.InventoryItemWhereInput[];
    name?: Prisma.StringFilter<"InventoryItem"> | string;
    category?: Prisma.StringFilter<"InventoryItem"> | string;
    targetCustomer?: Prisma.StringFilter<"InventoryItem"> | string;
    subcategory?: Prisma.StringFilter<"InventoryItem"> | string;
    size?: Prisma.StringFilter<"InventoryItem"> | string;
    condition?: Prisma.StringFilter<"InventoryItem"> | string;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    price?: Prisma.FloatFilter<"InventoryItem"> | number;
    dateAdded?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    locationId?: Prisma.StringFilter<"InventoryItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    location?: Prisma.XOR<Prisma.LocationScalarRelationFilter, Prisma.LocationWhereInput>;
}, "id">;
export type InventoryItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    targetCustomer?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    dateAdded?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InventoryItemCountOrderByAggregateInput;
    _avg?: Prisma.InventoryItemAvgOrderByAggregateInput;
    _max?: Prisma.InventoryItemMaxOrderByAggregateInput;
    _min?: Prisma.InventoryItemMinOrderByAggregateInput;
    _sum?: Prisma.InventoryItemSumOrderByAggregateInput;
};
export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryItemScalarWhereWithAggregatesInput | Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryItemScalarWhereWithAggregatesInput | Prisma.InventoryItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    name?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    category?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    targetCustomer?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    subcategory?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    size?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    condition?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"InventoryItem"> | number;
    price?: Prisma.FloatWithAggregatesFilter<"InventoryItem"> | number;
    dateAdded?: Prisma.DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string;
    locationId?: Prisma.StringWithAggregatesFilter<"InventoryItem"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string;
};
export type InventoryItemCreateInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    location: Prisma.LocationCreateNestedOneWithoutItemsInput;
};
export type InventoryItemUncheckedCreateInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    locationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.LocationUpdateOneRequiredWithoutItemsNestedInput;
};
export type InventoryItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    locationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemCreateManyInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    locationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    locationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemListRelationFilter = {
    every?: Prisma.InventoryItemWhereInput;
    some?: Prisma.InventoryItemWhereInput;
    none?: Prisma.InventoryItemWhereInput;
};
export type InventoryItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventoryItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    targetCustomer?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    dateAdded?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type InventoryItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    targetCustomer?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    dateAdded?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    targetCustomer?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    dateAdded?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type InventoryItemCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput> | Prisma.InventoryItemCreateWithoutLocationInput[] | Prisma.InventoryItemUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutLocationInput | Prisma.InventoryItemCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.InventoryItemCreateManyLocationInputEnvelope;
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
};
export type InventoryItemUncheckedCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput> | Prisma.InventoryItemCreateWithoutLocationInput[] | Prisma.InventoryItemUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutLocationInput | Prisma.InventoryItemCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.InventoryItemCreateManyLocationInputEnvelope;
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
};
export type InventoryItemUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput> | Prisma.InventoryItemCreateWithoutLocationInput[] | Prisma.InventoryItemUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutLocationInput | Prisma.InventoryItemCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.InventoryItemUpsertWithWhereUniqueWithoutLocationInput | Prisma.InventoryItemUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.InventoryItemCreateManyLocationInputEnvelope;
    set?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    disconnect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    delete?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    update?: Prisma.InventoryItemUpdateWithWhereUniqueWithoutLocationInput | Prisma.InventoryItemUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.InventoryItemUpdateManyWithWhereWithoutLocationInput | Prisma.InventoryItemUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
};
export type InventoryItemUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput> | Prisma.InventoryItemCreateWithoutLocationInput[] | Prisma.InventoryItemUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.InventoryItemCreateOrConnectWithoutLocationInput | Prisma.InventoryItemCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.InventoryItemUpsertWithWhereUniqueWithoutLocationInput | Prisma.InventoryItemUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.InventoryItemCreateManyLocationInputEnvelope;
    set?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    disconnect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    delete?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    connect?: Prisma.InventoryItemWhereUniqueInput | Prisma.InventoryItemWhereUniqueInput[];
    update?: Prisma.InventoryItemUpdateWithWhereUniqueWithoutLocationInput | Prisma.InventoryItemUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.InventoryItemUpdateManyWithWhereWithoutLocationInput | Prisma.InventoryItemUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type InventoryItemCreateWithoutLocationInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryItemUncheckedCreateWithoutLocationInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryItemCreateOrConnectWithoutLocationInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput>;
};
export type InventoryItemCreateManyLocationInputEnvelope = {
    data: Prisma.InventoryItemCreateManyLocationInput | Prisma.InventoryItemCreateManyLocationInput[];
    skipDuplicates?: boolean;
};
export type InventoryItemUpsertWithWhereUniqueWithoutLocationInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryItemUpdateWithoutLocationInput, Prisma.InventoryItemUncheckedUpdateWithoutLocationInput>;
    create: Prisma.XOR<Prisma.InventoryItemCreateWithoutLocationInput, Prisma.InventoryItemUncheckedCreateWithoutLocationInput>;
};
export type InventoryItemUpdateWithWhereUniqueWithoutLocationInput = {
    where: Prisma.InventoryItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryItemUpdateWithoutLocationInput, Prisma.InventoryItemUncheckedUpdateWithoutLocationInput>;
};
export type InventoryItemUpdateManyWithWhereWithoutLocationInput = {
    where: Prisma.InventoryItemScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyWithoutLocationInput>;
};
export type InventoryItemScalarWhereInput = {
    AND?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
    OR?: Prisma.InventoryItemScalarWhereInput[];
    NOT?: Prisma.InventoryItemScalarWhereInput | Prisma.InventoryItemScalarWhereInput[];
    id?: Prisma.StringFilter<"InventoryItem"> | string;
    name?: Prisma.StringFilter<"InventoryItem"> | string;
    category?: Prisma.StringFilter<"InventoryItem"> | string;
    targetCustomer?: Prisma.StringFilter<"InventoryItem"> | string;
    subcategory?: Prisma.StringFilter<"InventoryItem"> | string;
    size?: Prisma.StringFilter<"InventoryItem"> | string;
    condition?: Prisma.StringFilter<"InventoryItem"> | string;
    quantity?: Prisma.IntFilter<"InventoryItem"> | number;
    price?: Prisma.FloatFilter<"InventoryItem"> | number;
    dateAdded?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    locationId?: Prisma.StringFilter<"InventoryItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"InventoryItem"> | Date | string;
};
export type InventoryItemCreateManyLocationInput = {
    id?: string;
    name: string;
    category: string;
    targetCustomer: string;
    subcategory: string;
    size: string;
    condition: string;
    quantity?: number;
    price?: number;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryItemUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemUncheckedUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemUncheckedUpdateManyWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    targetCustomer?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    dateAdded?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
    targetCustomer?: boolean;
    subcategory?: boolean;
    size?: boolean;
    condition?: boolean;
    quantity?: boolean;
    price?: boolean;
    dateAdded?: boolean;
    locationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
    targetCustomer?: boolean;
    subcategory?: boolean;
    size?: boolean;
    condition?: boolean;
    quantity?: boolean;
    price?: boolean;
    dateAdded?: boolean;
    locationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    category?: boolean;
    targetCustomer?: boolean;
    subcategory?: boolean;
    size?: boolean;
    condition?: boolean;
    quantity?: boolean;
    price?: boolean;
    dateAdded?: boolean;
    locationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemSelectScalar = {
    id?: boolean;
    name?: boolean;
    category?: boolean;
    targetCustomer?: boolean;
    subcategory?: boolean;
    size?: boolean;
    condition?: boolean;
    quantity?: boolean;
    price?: boolean;
    dateAdded?: boolean;
    locationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InventoryItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "category" | "targetCustomer" | "subcategory" | "size" | "condition" | "quantity" | "price" | "dateAdded" | "locationId" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryItem"]>;
export type InventoryItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
};
export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
};
export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationDefaultArgs<ExtArgs>;
};
export type $InventoryItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InventoryItem";
    objects: {
        location: Prisma.$LocationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
        locationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["inventoryItem"]>;
    composites: {};
};
export type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload, S>;
export type InventoryItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryItemCountAggregateInputType | true;
};
export interface InventoryItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'];
        meta: {
            name: 'InventoryItem';
        };
    };
    findUnique<T extends InventoryItemFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryItemFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryItemFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryItemCreateArgs>(args: Prisma.SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryItemCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryItemDeleteArgs>(args: Prisma.SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryItemUpdateArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryItemUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryItemUpsertArgs>(args: Prisma.SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryItemClient<runtime.Types.Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryItemCountArgs>(args?: Prisma.Subset<T, InventoryItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryItemCountAggregateOutputType> : number>;
    aggregate<T extends InventoryItemAggregateArgs>(args: Prisma.Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>;
    groupBy<T extends InventoryItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryItemGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryItemGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryItemFieldRefs;
}
export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    location<T extends Prisma.LocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocationDefaultArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryItemFieldRefs {
    readonly id: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly name: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly category: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly targetCustomer: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly subcategory: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly size: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly condition: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"InventoryItem", 'Int'>;
    readonly price: Prisma.FieldRef<"InventoryItem", 'Float'>;
    readonly dateAdded: Prisma.FieldRef<"InventoryItem", 'DateTime'>;
    readonly locationId: Prisma.FieldRef<"InventoryItem", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InventoryItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"InventoryItem", 'DateTime'>;
}
export type InventoryItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where?: Prisma.InventoryItemWhereInput;
    orderBy?: Prisma.InventoryItemOrderByWithRelationInput | Prisma.InventoryItemOrderByWithRelationInput[];
    cursor?: Prisma.InventoryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryItemScalarFieldEnum | Prisma.InventoryItemScalarFieldEnum[];
};
export type InventoryItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemCreateInput, Prisma.InventoryItemUncheckedCreateInput>;
};
export type InventoryItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryItemCreateManyInput | Prisma.InventoryItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    data: Prisma.InventoryItemCreateManyInput | Prisma.InventoryItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemUpdateInput, Prisma.InventoryItemUncheckedUpdateInput>;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyInput>;
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
};
export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryItemUpdateManyMutationInput, Prisma.InventoryItemUncheckedUpdateManyInput>;
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
    include?: Prisma.InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryItemCreateInput, Prisma.InventoryItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryItemUpdateInput, Prisma.InventoryItemUncheckedUpdateInput>;
};
export type InventoryItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
    where: Prisma.InventoryItemWhereUniqueInput;
};
export type InventoryItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryItemWhereInput;
    limit?: number;
};
export type InventoryItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryItemSelect<ExtArgs> | null;
    omit?: Prisma.InventoryItemOmit<ExtArgs> | null;
    include?: Prisma.InventoryItemInclude<ExtArgs> | null;
};
