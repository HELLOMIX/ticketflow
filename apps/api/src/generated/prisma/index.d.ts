
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventSeat
 * 
 */
export type EventSeat = $Result.DefaultSelection<Prisma.$EventSeatPayload>
/**
 * Model EventGatekeeper
 * 
 */
export type EventGatekeeper = $Result.DefaultSelection<Prisma.$EventGatekeeperPayload>
/**
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSeat`: Exposes CRUD operations for the **EventSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSeats
    * const eventSeats = await prisma.eventSeat.findMany()
    * ```
    */
  get eventSeat(): Prisma.EventSeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventGatekeeper`: Exposes CRUD operations for the **EventGatekeeper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventGatekeepers
    * const eventGatekeepers = await prisma.eventGatekeeper.findMany()
    * ```
    */
  get eventGatekeeper(): Prisma.EventGatekeeperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Venue: 'Venue',
    Seat: 'Seat',
    Event: 'Event',
    EventSeat: 'EventSeat',
    EventGatekeeper: 'EventGatekeeper',
    TicketType: 'TicketType',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "venue" | "seat" | "event" | "eventSeat" | "eventGatekeeper" | "ticketType" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventSeat: {
        payload: Prisma.$EventSeatPayload<ExtArgs>
        fields: Prisma.EventSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          findFirst: {
            args: Prisma.EventSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          findMany: {
            args: Prisma.EventSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>[]
          }
          create: {
            args: Prisma.EventSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          createMany: {
            args: Prisma.EventSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventSeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>[]
          }
          delete: {
            args: Prisma.EventSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          update: {
            args: Prisma.EventSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          deleteMany: {
            args: Prisma.EventSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventSeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>[]
          }
          upsert: {
            args: Prisma.EventSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSeatPayload>
          }
          aggregate: {
            args: Prisma.EventSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSeat>
          }
          groupBy: {
            args: Prisma.EventSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventSeatCountArgs<ExtArgs>
            result: $Utils.Optional<EventSeatCountAggregateOutputType> | number
          }
        }
      }
      EventGatekeeper: {
        payload: Prisma.$EventGatekeeperPayload<ExtArgs>
        fields: Prisma.EventGatekeeperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventGatekeeperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventGatekeeperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          findFirst: {
            args: Prisma.EventGatekeeperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventGatekeeperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          findMany: {
            args: Prisma.EventGatekeeperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>[]
          }
          create: {
            args: Prisma.EventGatekeeperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          createMany: {
            args: Prisma.EventGatekeeperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventGatekeeperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>[]
          }
          delete: {
            args: Prisma.EventGatekeeperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          update: {
            args: Prisma.EventGatekeeperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          deleteMany: {
            args: Prisma.EventGatekeeperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventGatekeeperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventGatekeeperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>[]
          }
          upsert: {
            args: Prisma.EventGatekeeperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventGatekeeperPayload>
          }
          aggregate: {
            args: Prisma.EventGatekeeperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventGatekeeper>
          }
          groupBy: {
            args: Prisma.EventGatekeeperGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGatekeeperGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventGatekeeperCountArgs<ExtArgs>
            result: $Utils.Optional<EventGatekeeperCountAggregateOutputType> | number
          }
        }
      }
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    venue?: VenueOmit
    seat?: SeatOmit
    event?: EventOmit
    eventSeat?: EventSeatOmit
    eventGatekeeper?: EventGatekeeperOmit
    ticketType?: TicketTypeOmit
    ticket?: TicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizedEvents: number
    gatekeeperAssignments: number
    reservedSeats: number
    purchasedTickets: number
    validatedTickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | UserCountOutputTypeCountOrganizedEventsArgs
    gatekeeperAssignments?: boolean | UserCountOutputTypeCountGatekeeperAssignmentsArgs
    reservedSeats?: boolean | UserCountOutputTypeCountReservedSeatsArgs
    purchasedTickets?: boolean | UserCountOutputTypeCountPurchasedTicketsArgs
    validatedTickets?: boolean | UserCountOutputTypeCountValidatedTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGatekeeperAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventGatekeeperWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservedSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSeatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidatedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    seats: number
    events: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | VenueCountOutputTypeCountSeatsArgs
    events?: boolean | VenueCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    eventSeats: number
    tickets: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventSeats?: boolean | SeatCountOutputTypeCountEventSeatsArgs
    tickets?: boolean | SeatCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountEventSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSeatWhereInput
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    eventSeats: number
    gatekeepers: number
    ticketTypes: number
    tickets: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventSeats?: boolean | EventCountOutputTypeCountEventSeatsArgs
    gatekeepers?: boolean | EventCountOutputTypeCountGatekeepersArgs
    ticketTypes?: boolean | EventCountOutputTypeCountTicketTypesArgs
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSeatWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountGatekeepersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventGatekeeperWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    tickets: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TicketTypeCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    roleId: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    cpf: string | null
    phone: string | null
    birthDate: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    roleId: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    cpf: string | null
    phone: string | null
    birthDate: string | null
    profilePictureUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    roleId: number
    name: number
    email: number
    passwordHash: number
    cpf: number
    phone: number
    birthDate: number
    profilePictureUrl: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    passwordHash?: true
    cpf?: true
    phone?: true
    birthDate?: true
    profilePictureUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    passwordHash?: true
    cpf?: true
    phone?: true
    birthDate?: true
    profilePictureUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    passwordHash?: true
    cpf?: true
    phone?: true
    birthDate?: true
    profilePictureUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone: string | null
    birthDate: string | null
    profilePictureUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    cpf?: boolean
    phone?: boolean
    birthDate?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    gatekeeperAssignments?: boolean | User$gatekeeperAssignmentsArgs<ExtArgs>
    reservedSeats?: boolean | User$reservedSeatsArgs<ExtArgs>
    purchasedTickets?: boolean | User$purchasedTicketsArgs<ExtArgs>
    validatedTickets?: boolean | User$validatedTicketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    cpf?: boolean
    phone?: boolean
    birthDate?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    cpf?: boolean
    phone?: boolean
    birthDate?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    roleId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    cpf?: boolean
    phone?: boolean
    birthDate?: boolean
    profilePictureUrl?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "name" | "email" | "passwordHash" | "cpf" | "phone" | "birthDate" | "profilePictureUrl" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    gatekeeperAssignments?: boolean | User$gatekeeperAssignmentsArgs<ExtArgs>
    reservedSeats?: boolean | User$reservedSeatsArgs<ExtArgs>
    purchasedTickets?: boolean | User$purchasedTicketsArgs<ExtArgs>
    validatedTickets?: boolean | User$validatedTicketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      organizedEvents: Prisma.$EventPayload<ExtArgs>[]
      gatekeeperAssignments: Prisma.$EventGatekeeperPayload<ExtArgs>[]
      reservedSeats: Prisma.$EventSeatPayload<ExtArgs>[]
      purchasedTickets: Prisma.$TicketPayload<ExtArgs>[]
      validatedTickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: number
      name: string
      email: string
      passwordHash: string
      cpf: string
      phone: string | null
      birthDate: string | null
      profilePictureUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizedEvents<T extends User$organizedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gatekeeperAssignments<T extends User$gatekeeperAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$gatekeeperAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservedSeats<T extends User$reservedSeatsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservedSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchasedTickets<T extends User$purchasedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validatedTickets<T extends User$validatedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$validatedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organizedEvents
   */
  export type User$organizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.gatekeeperAssignments
   */
  export type User$gatekeeperAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    where?: EventGatekeeperWhereInput
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    cursor?: EventGatekeeperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventGatekeeperScalarFieldEnum | EventGatekeeperScalarFieldEnum[]
  }

  /**
   * User.reservedSeats
   */
  export type User$reservedSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    where?: EventSeatWhereInput
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    cursor?: EventSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * User.purchasedTickets
   */
  export type User$purchasedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.validatedTickets
   */
  export type User$validatedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    totalCapacity: number | null
  }

  export type VenueSumAggregateOutputType = {
    totalCapacity: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    hasAssignedSeats: boolean | null
    totalCapacity: number | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    hasAssignedSeats: boolean | null
    totalCapacity: number | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    hasAssignedSeats: number
    totalCapacity: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    totalCapacity?: true
  }

  export type VenueSumAggregateInputType = {
    totalCapacity?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hasAssignedSeats?: true
    totalCapacity?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hasAssignedSeats?: true
    totalCapacity?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    hasAssignedSeats?: true
    totalCapacity?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    address: string
    hasAssignedSeats: boolean
    totalCapacity: number
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hasAssignedSeats?: boolean
    totalCapacity?: boolean
    seats?: boolean | Venue$seatsArgs<ExtArgs>
    events?: boolean | Venue$eventsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hasAssignedSeats?: boolean
    totalCapacity?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    hasAssignedSeats?: boolean
    totalCapacity?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    hasAssignedSeats?: boolean
    totalCapacity?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "hasAssignedSeats" | "totalCapacity", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | Venue$seatsArgs<ExtArgs>
    events?: boolean | Venue$eventsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      seats: Prisma.$SeatPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      hasAssignedSeats: boolean
      totalCapacity: number
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seats<T extends Venue$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Venue$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly hasAssignedSeats: FieldRef<"Venue", 'Boolean'>
    readonly totalCapacity: FieldRef<"Venue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.seats
   */
  export type Venue$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Venue.events
   */
  export type Venue$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    seatNumber: number | null
    gridX: number | null
    gridY: number | null
  }

  export type SeatSumAggregateOutputType = {
    seatNumber: number | null
    gridX: number | null
    gridY: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    rowLabel: string | null
    seatNumber: number | null
    gridX: number | null
    gridY: number | null
    seatType: string | null
  }

  export type SeatMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    rowLabel: string | null
    seatNumber: number | null
    gridX: number | null
    gridY: number | null
    seatType: string | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    venueId: number
    rowLabel: number
    seatNumber: number
    gridX: number
    gridY: number
    seatType: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    seatNumber?: true
    gridX?: true
    gridY?: true
  }

  export type SeatSumAggregateInputType = {
    seatNumber?: true
    gridX?: true
    gridY?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    venueId?: true
    rowLabel?: true
    seatNumber?: true
    gridX?: true
    gridY?: true
    seatType?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    venueId?: true
    rowLabel?: true
    seatNumber?: true
    gridX?: true
    gridY?: true
    seatType?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    venueId?: true
    rowLabel?: true
    seatNumber?: true
    gridX?: true
    gridY?: true
    seatType?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: string
    venueId: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType: string
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    gridX?: boolean
    gridY?: boolean
    seatType?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    eventSeats?: boolean | Seat$eventSeatsArgs<ExtArgs>
    tickets?: boolean | Seat$ticketsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    gridX?: boolean
    gridY?: boolean
    seatType?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    gridX?: boolean
    gridY?: boolean
    seatType?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectScalar = {
    id?: boolean
    venueId?: boolean
    rowLabel?: boolean
    seatNumber?: boolean
    gridX?: boolean
    gridY?: boolean
    seatType?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "rowLabel" | "seatNumber" | "gridX" | "gridY" | "seatType", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    eventSeats?: boolean | Seat$eventSeatsArgs<ExtArgs>
    tickets?: boolean | Seat$ticketsArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type SeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      eventSeats: Prisma.$EventSeatPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      rowLabel: string
      seatNumber: number
      gridX: number
      gridY: number
      seatType: string
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seats and returns the data saved in the database.
     * @param {SeatCreateManyAndReturnArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seats and only return the `id`
     * const seatWithIdOnly = await prisma.seat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats and returns the data updated in the database.
     * @param {SeatUpdateManyAndReturnArgs} args - Arguments to update many Seats.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seats and only return the `id`
     * const seatWithIdOnly = await prisma.seat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeatUpdateManyAndReturnArgs>(args: SelectSubset<T, SeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventSeats<T extends Seat$eventSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$eventSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Seat$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'String'>
    readonly venueId: FieldRef<"Seat", 'String'>
    readonly rowLabel: FieldRef<"Seat", 'String'>
    readonly seatNumber: FieldRef<"Seat", 'Int'>
    readonly gridX: FieldRef<"Seat", 'Int'>
    readonly gridY: FieldRef<"Seat", 'Int'>
    readonly seatType: FieldRef<"Seat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
  }

  /**
   * Seat createManyAndReturn
   */
  export type SeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat updateManyAndReturn
   */
  export type SeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.eventSeats
   */
  export type Seat$eventSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    where?: EventSeatWhereInput
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    cursor?: EventSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * Seat.tickets
   */
  export type Seat$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    organizerId: string | null
    venueId: string | null
    title: string | null
    description: string | null
    bannerUrl: string | null
    eventType: string | null
    startTime: Date | null
    externalApiSource: string | null
    externalApiId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    organizerId: string | null
    venueId: string | null
    title: string | null
    description: string | null
    bannerUrl: string | null
    eventType: string | null
    startTime: Date | null
    externalApiSource: string | null
    externalApiId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizerId: number
    venueId: number
    title: number
    description: number
    bannerUrl: number
    eventType: number
    startTime: number
    externalApiSource: number
    externalApiId: number
    status: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    organizerId?: true
    venueId?: true
    title?: true
    description?: true
    bannerUrl?: true
    eventType?: true
    startTime?: true
    externalApiSource?: true
    externalApiId?: true
    status?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizerId?: true
    venueId?: true
    title?: true
    description?: true
    bannerUrl?: true
    eventType?: true
    startTime?: true
    externalApiSource?: true
    externalApiId?: true
    status?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizerId?: true
    venueId?: true
    title?: true
    description?: true
    bannerUrl?: true
    eventType?: true
    startTime?: true
    externalApiSource?: true
    externalApiId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    organizerId: string
    venueId: string
    title: string
    description: string | null
    bannerUrl: string | null
    eventType: string
    startTime: Date
    externalApiSource: string | null
    externalApiId: string | null
    status: string
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    venueId?: boolean
    title?: boolean
    description?: boolean
    bannerUrl?: boolean
    eventType?: boolean
    startTime?: boolean
    externalApiSource?: boolean
    externalApiId?: boolean
    status?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    eventSeats?: boolean | Event$eventSeatsArgs<ExtArgs>
    gatekeepers?: boolean | Event$gatekeepersArgs<ExtArgs>
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    venueId?: boolean
    title?: boolean
    description?: boolean
    bannerUrl?: boolean
    eventType?: boolean
    startTime?: boolean
    externalApiSource?: boolean
    externalApiId?: boolean
    status?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    venueId?: boolean
    title?: boolean
    description?: boolean
    bannerUrl?: boolean
    eventType?: boolean
    startTime?: boolean
    externalApiSource?: boolean
    externalApiId?: boolean
    status?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    organizerId?: boolean
    venueId?: boolean
    title?: boolean
    description?: boolean
    bannerUrl?: boolean
    eventType?: boolean
    startTime?: boolean
    externalApiSource?: boolean
    externalApiId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "venueId" | "title" | "description" | "bannerUrl" | "eventType" | "startTime" | "externalApiSource" | "externalApiId" | "status" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    eventSeats?: boolean | Event$eventSeatsArgs<ExtArgs>
    gatekeepers?: boolean | Event$gatekeepersArgs<ExtArgs>
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
      eventSeats: Prisma.$EventSeatPayload<ExtArgs>[]
      gatekeepers: Prisma.$EventGatekeeperPayload<ExtArgs>[]
      ticketTypes: Prisma.$TicketTypePayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizerId: string
      venueId: string
      title: string
      description: string | null
      bannerUrl: string | null
      eventType: string
      startTime: Date
      externalApiSource: string | null
      externalApiId: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventSeats<T extends Event$eventSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gatekeepers<T extends Event$gatekeepersArgs<ExtArgs> = {}>(args?: Subset<T, Event$gatekeepersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketTypes<T extends Event$ticketTypesArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly venueId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly bannerUrl: FieldRef<"Event", 'String'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly externalApiSource: FieldRef<"Event", 'String'>
    readonly externalApiId: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.eventSeats
   */
  export type Event$eventSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    where?: EventSeatWhereInput
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    cursor?: EventSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * Event.gatekeepers
   */
  export type Event$gatekeepersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    where?: EventGatekeeperWhereInput
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    cursor?: EventGatekeeperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventGatekeeperScalarFieldEnum | EventGatekeeperScalarFieldEnum[]
  }

  /**
   * Event.ticketTypes
   */
  export type Event$ticketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    cursor?: TicketTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventSeat
   */

  export type AggregateEventSeat = {
    _count: EventSeatCountAggregateOutputType | null
    _min: EventSeatMinAggregateOutputType | null
    _max: EventSeatMaxAggregateOutputType | null
  }

  export type EventSeatMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    seatId: string | null
    status: string | null
    reservedById: string | null
    reservationExpiresAt: Date | null
  }

  export type EventSeatMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    seatId: string | null
    status: string | null
    reservedById: string | null
    reservationExpiresAt: Date | null
  }

  export type EventSeatCountAggregateOutputType = {
    id: number
    eventId: number
    seatId: number
    status: number
    reservedById: number
    reservationExpiresAt: number
    _all: number
  }


  export type EventSeatMinAggregateInputType = {
    id?: true
    eventId?: true
    seatId?: true
    status?: true
    reservedById?: true
    reservationExpiresAt?: true
  }

  export type EventSeatMaxAggregateInputType = {
    id?: true
    eventId?: true
    seatId?: true
    status?: true
    reservedById?: true
    reservationExpiresAt?: true
  }

  export type EventSeatCountAggregateInputType = {
    id?: true
    eventId?: true
    seatId?: true
    status?: true
    reservedById?: true
    reservationExpiresAt?: true
    _all?: true
  }

  export type EventSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSeat to aggregate.
     */
    where?: EventSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSeats to fetch.
     */
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSeats
    **/
    _count?: true | EventSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventSeatMaxAggregateInputType
  }

  export type GetEventSeatAggregateType<T extends EventSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSeat[P]>
      : GetScalarType<T[P], AggregateEventSeat[P]>
  }




  export type EventSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSeatWhereInput
    orderBy?: EventSeatOrderByWithAggregationInput | EventSeatOrderByWithAggregationInput[]
    by: EventSeatScalarFieldEnum[] | EventSeatScalarFieldEnum
    having?: EventSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventSeatCountAggregateInputType | true
    _min?: EventSeatMinAggregateInputType
    _max?: EventSeatMaxAggregateInputType
  }

  export type EventSeatGroupByOutputType = {
    id: string
    eventId: string
    seatId: string
    status: string
    reservedById: string | null
    reservationExpiresAt: Date | null
    _count: EventSeatCountAggregateOutputType | null
    _min: EventSeatMinAggregateOutputType | null
    _max: EventSeatMaxAggregateOutputType | null
  }

  type GetEventSeatGroupByPayload<T extends EventSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventSeatGroupByOutputType[P]>
            : GetScalarType<T[P], EventSeatGroupByOutputType[P]>
        }
      >
    >


  export type EventSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    seatId?: boolean
    status?: boolean
    reservedById?: boolean
    reservationExpiresAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }, ExtArgs["result"]["eventSeat"]>

  export type EventSeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    seatId?: boolean
    status?: boolean
    reservedById?: boolean
    reservationExpiresAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }, ExtArgs["result"]["eventSeat"]>

  export type EventSeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    seatId?: boolean
    status?: boolean
    reservedById?: boolean
    reservationExpiresAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }, ExtArgs["result"]["eventSeat"]>

  export type EventSeatSelectScalar = {
    id?: boolean
    eventId?: boolean
    seatId?: boolean
    status?: boolean
    reservedById?: boolean
    reservationExpiresAt?: boolean
  }

  export type EventSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "seatId" | "status" | "reservedById" | "reservationExpiresAt", ExtArgs["result"]["eventSeat"]>
  export type EventSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }
  export type EventSeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }
  export type EventSeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    reservedBy?: boolean | EventSeat$reservedByArgs<ExtArgs>
  }

  export type $EventSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSeat"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
      reservedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      seatId: string
      status: string
      reservedById: string | null
      reservationExpiresAt: Date | null
    }, ExtArgs["result"]["eventSeat"]>
    composites: {}
  }

  type EventSeatGetPayload<S extends boolean | null | undefined | EventSeatDefaultArgs> = $Result.GetResult<Prisma.$EventSeatPayload, S>

  type EventSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventSeatCountAggregateInputType | true
    }

  export interface EventSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSeat'], meta: { name: 'EventSeat' } }
    /**
     * Find zero or one EventSeat that matches the filter.
     * @param {EventSeatFindUniqueArgs} args - Arguments to find a EventSeat
     * @example
     * // Get one EventSeat
     * const eventSeat = await prisma.eventSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventSeatFindUniqueArgs>(args: SelectSubset<T, EventSeatFindUniqueArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventSeatFindUniqueOrThrowArgs} args - Arguments to find a EventSeat
     * @example
     * // Get one EventSeat
     * const eventSeat = await prisma.eventSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, EventSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatFindFirstArgs} args - Arguments to find a EventSeat
     * @example
     * // Get one EventSeat
     * const eventSeat = await prisma.eventSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventSeatFindFirstArgs>(args?: SelectSubset<T, EventSeatFindFirstArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatFindFirstOrThrowArgs} args - Arguments to find a EventSeat
     * @example
     * // Get one EventSeat
     * const eventSeat = await prisma.eventSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, EventSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSeats
     * const eventSeats = await prisma.eventSeat.findMany()
     * 
     * // Get first 10 EventSeats
     * const eventSeats = await prisma.eventSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventSeatWithIdOnly = await prisma.eventSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventSeatFindManyArgs>(args?: SelectSubset<T, EventSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSeat.
     * @param {EventSeatCreateArgs} args - Arguments to create a EventSeat.
     * @example
     * // Create one EventSeat
     * const EventSeat = await prisma.eventSeat.create({
     *   data: {
     *     // ... data to create a EventSeat
     *   }
     * })
     * 
     */
    create<T extends EventSeatCreateArgs>(args: SelectSubset<T, EventSeatCreateArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSeats.
     * @param {EventSeatCreateManyArgs} args - Arguments to create many EventSeats.
     * @example
     * // Create many EventSeats
     * const eventSeat = await prisma.eventSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventSeatCreateManyArgs>(args?: SelectSubset<T, EventSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventSeats and returns the data saved in the database.
     * @param {EventSeatCreateManyAndReturnArgs} args - Arguments to create many EventSeats.
     * @example
     * // Create many EventSeats
     * const eventSeat = await prisma.eventSeat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventSeats and only return the `id`
     * const eventSeatWithIdOnly = await prisma.eventSeat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventSeatCreateManyAndReturnArgs>(args?: SelectSubset<T, EventSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventSeat.
     * @param {EventSeatDeleteArgs} args - Arguments to delete one EventSeat.
     * @example
     * // Delete one EventSeat
     * const EventSeat = await prisma.eventSeat.delete({
     *   where: {
     *     // ... filter to delete one EventSeat
     *   }
     * })
     * 
     */
    delete<T extends EventSeatDeleteArgs>(args: SelectSubset<T, EventSeatDeleteArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSeat.
     * @param {EventSeatUpdateArgs} args - Arguments to update one EventSeat.
     * @example
     * // Update one EventSeat
     * const eventSeat = await prisma.eventSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventSeatUpdateArgs>(args: SelectSubset<T, EventSeatUpdateArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSeats.
     * @param {EventSeatDeleteManyArgs} args - Arguments to filter EventSeats to delete.
     * @example
     * // Delete a few EventSeats
     * const { count } = await prisma.eventSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventSeatDeleteManyArgs>(args?: SelectSubset<T, EventSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSeats
     * const eventSeat = await prisma.eventSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventSeatUpdateManyArgs>(args: SelectSubset<T, EventSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSeats and returns the data updated in the database.
     * @param {EventSeatUpdateManyAndReturnArgs} args - Arguments to update many EventSeats.
     * @example
     * // Update many EventSeats
     * const eventSeat = await prisma.eventSeat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventSeats and only return the `id`
     * const eventSeatWithIdOnly = await prisma.eventSeat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventSeatUpdateManyAndReturnArgs>(args: SelectSubset<T, EventSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventSeat.
     * @param {EventSeatUpsertArgs} args - Arguments to update or create a EventSeat.
     * @example
     * // Update or create a EventSeat
     * const eventSeat = await prisma.eventSeat.upsert({
     *   create: {
     *     // ... data to create a EventSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSeat we want to update
     *   }
     * })
     */
    upsert<T extends EventSeatUpsertArgs>(args: SelectSubset<T, EventSeatUpsertArgs<ExtArgs>>): Prisma__EventSeatClient<$Result.GetResult<Prisma.$EventSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatCountArgs} args - Arguments to filter EventSeats to count.
     * @example
     * // Count the number of EventSeats
     * const count = await prisma.eventSeat.count({
     *   where: {
     *     // ... the filter for the EventSeats we want to count
     *   }
     * })
    **/
    count<T extends EventSeatCountArgs>(
      args?: Subset<T, EventSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventSeatAggregateArgs>(args: Subset<T, EventSeatAggregateArgs>): Prisma.PrismaPromise<GetEventSeatAggregateType<T>>

    /**
     * Group by EventSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventSeatGroupByArgs['orderBy'] }
        : { orderBy?: EventSeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSeat model
   */
  readonly fields: EventSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservedBy<T extends EventSeat$reservedByArgs<ExtArgs> = {}>(args?: Subset<T, EventSeat$reservedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventSeat model
   */
  interface EventSeatFieldRefs {
    readonly id: FieldRef<"EventSeat", 'String'>
    readonly eventId: FieldRef<"EventSeat", 'String'>
    readonly seatId: FieldRef<"EventSeat", 'String'>
    readonly status: FieldRef<"EventSeat", 'String'>
    readonly reservedById: FieldRef<"EventSeat", 'String'>
    readonly reservationExpiresAt: FieldRef<"EventSeat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventSeat findUnique
   */
  export type EventSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter, which EventSeat to fetch.
     */
    where: EventSeatWhereUniqueInput
  }

  /**
   * EventSeat findUniqueOrThrow
   */
  export type EventSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter, which EventSeat to fetch.
     */
    where: EventSeatWhereUniqueInput
  }

  /**
   * EventSeat findFirst
   */
  export type EventSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter, which EventSeat to fetch.
     */
    where?: EventSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSeats to fetch.
     */
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSeats.
     */
    cursor?: EventSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSeats.
     */
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * EventSeat findFirstOrThrow
   */
  export type EventSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter, which EventSeat to fetch.
     */
    where?: EventSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSeats to fetch.
     */
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSeats.
     */
    cursor?: EventSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSeats.
     */
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * EventSeat findMany
   */
  export type EventSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter, which EventSeats to fetch.
     */
    where?: EventSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSeats to fetch.
     */
    orderBy?: EventSeatOrderByWithRelationInput | EventSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSeats.
     */
    cursor?: EventSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSeats.
     */
    distinct?: EventSeatScalarFieldEnum | EventSeatScalarFieldEnum[]
  }

  /**
   * EventSeat create
   */
  export type EventSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSeat.
     */
    data: XOR<EventSeatCreateInput, EventSeatUncheckedCreateInput>
  }

  /**
   * EventSeat createMany
   */
  export type EventSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSeats.
     */
    data: EventSeatCreateManyInput | EventSeatCreateManyInput[]
  }

  /**
   * EventSeat createManyAndReturn
   */
  export type EventSeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * The data used to create many EventSeats.
     */
    data: EventSeatCreateManyInput | EventSeatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSeat update
   */
  export type EventSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSeat.
     */
    data: XOR<EventSeatUpdateInput, EventSeatUncheckedUpdateInput>
    /**
     * Choose, which EventSeat to update.
     */
    where: EventSeatWhereUniqueInput
  }

  /**
   * EventSeat updateMany
   */
  export type EventSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSeats.
     */
    data: XOR<EventSeatUpdateManyMutationInput, EventSeatUncheckedUpdateManyInput>
    /**
     * Filter which EventSeats to update
     */
    where?: EventSeatWhereInput
    /**
     * Limit how many EventSeats to update.
     */
    limit?: number
  }

  /**
   * EventSeat updateManyAndReturn
   */
  export type EventSeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * The data used to update EventSeats.
     */
    data: XOR<EventSeatUpdateManyMutationInput, EventSeatUncheckedUpdateManyInput>
    /**
     * Filter which EventSeats to update
     */
    where?: EventSeatWhereInput
    /**
     * Limit how many EventSeats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSeat upsert
   */
  export type EventSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSeat to update in case it exists.
     */
    where: EventSeatWhereUniqueInput
    /**
     * In case the EventSeat found by the `where` argument doesn't exist, create a new EventSeat with this data.
     */
    create: XOR<EventSeatCreateInput, EventSeatUncheckedCreateInput>
    /**
     * In case the EventSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventSeatUpdateInput, EventSeatUncheckedUpdateInput>
  }

  /**
   * EventSeat delete
   */
  export type EventSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
    /**
     * Filter which EventSeat to delete.
     */
    where: EventSeatWhereUniqueInput
  }

  /**
   * EventSeat deleteMany
   */
  export type EventSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSeats to delete
     */
    where?: EventSeatWhereInput
    /**
     * Limit how many EventSeats to delete.
     */
    limit?: number
  }

  /**
   * EventSeat.reservedBy
   */
  export type EventSeat$reservedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * EventSeat without action
   */
  export type EventSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSeat
     */
    select?: EventSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSeat
     */
    omit?: EventSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSeatInclude<ExtArgs> | null
  }


  /**
   * Model EventGatekeeper
   */

  export type AggregateEventGatekeeper = {
    _count: EventGatekeeperCountAggregateOutputType | null
    _min: EventGatekeeperMinAggregateOutputType | null
    _max: EventGatekeeperMaxAggregateOutputType | null
  }

  export type EventGatekeeperMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    gatekeeperId: string | null
    assignedAt: Date | null
  }

  export type EventGatekeeperMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    gatekeeperId: string | null
    assignedAt: Date | null
  }

  export type EventGatekeeperCountAggregateOutputType = {
    id: number
    eventId: number
    gatekeeperId: number
    assignedAt: number
    _all: number
  }


  export type EventGatekeeperMinAggregateInputType = {
    id?: true
    eventId?: true
    gatekeeperId?: true
    assignedAt?: true
  }

  export type EventGatekeeperMaxAggregateInputType = {
    id?: true
    eventId?: true
    gatekeeperId?: true
    assignedAt?: true
  }

  export type EventGatekeeperCountAggregateInputType = {
    id?: true
    eventId?: true
    gatekeeperId?: true
    assignedAt?: true
    _all?: true
  }

  export type EventGatekeeperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventGatekeeper to aggregate.
     */
    where?: EventGatekeeperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGatekeepers to fetch.
     */
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventGatekeeperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGatekeepers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGatekeepers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventGatekeepers
    **/
    _count?: true | EventGatekeeperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventGatekeeperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventGatekeeperMaxAggregateInputType
  }

  export type GetEventGatekeeperAggregateType<T extends EventGatekeeperAggregateArgs> = {
        [P in keyof T & keyof AggregateEventGatekeeper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventGatekeeper[P]>
      : GetScalarType<T[P], AggregateEventGatekeeper[P]>
  }




  export type EventGatekeeperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventGatekeeperWhereInput
    orderBy?: EventGatekeeperOrderByWithAggregationInput | EventGatekeeperOrderByWithAggregationInput[]
    by: EventGatekeeperScalarFieldEnum[] | EventGatekeeperScalarFieldEnum
    having?: EventGatekeeperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventGatekeeperCountAggregateInputType | true
    _min?: EventGatekeeperMinAggregateInputType
    _max?: EventGatekeeperMaxAggregateInputType
  }

  export type EventGatekeeperGroupByOutputType = {
    id: string
    eventId: string
    gatekeeperId: string
    assignedAt: Date
    _count: EventGatekeeperCountAggregateOutputType | null
    _min: EventGatekeeperMinAggregateOutputType | null
    _max: EventGatekeeperMaxAggregateOutputType | null
  }

  type GetEventGatekeeperGroupByPayload<T extends EventGatekeeperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGatekeeperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGatekeeperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGatekeeperGroupByOutputType[P]>
            : GetScalarType<T[P], EventGatekeeperGroupByOutputType[P]>
        }
      >
    >


  export type EventGatekeeperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    gatekeeperId?: boolean
    assignedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventGatekeeper"]>

  export type EventGatekeeperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    gatekeeperId?: boolean
    assignedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventGatekeeper"]>

  export type EventGatekeeperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    gatekeeperId?: boolean
    assignedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventGatekeeper"]>

  export type EventGatekeeperSelectScalar = {
    id?: boolean
    eventId?: boolean
    gatekeeperId?: boolean
    assignedAt?: boolean
  }

  export type EventGatekeeperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "gatekeeperId" | "assignedAt", ExtArgs["result"]["eventGatekeeper"]>
  export type EventGatekeeperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventGatekeeperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventGatekeeperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    gatekeeper?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventGatekeeperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventGatekeeper"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      gatekeeper: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      gatekeeperId: string
      assignedAt: Date
    }, ExtArgs["result"]["eventGatekeeper"]>
    composites: {}
  }

  type EventGatekeeperGetPayload<S extends boolean | null | undefined | EventGatekeeperDefaultArgs> = $Result.GetResult<Prisma.$EventGatekeeperPayload, S>

  type EventGatekeeperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventGatekeeperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventGatekeeperCountAggregateInputType | true
    }

  export interface EventGatekeeperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventGatekeeper'], meta: { name: 'EventGatekeeper' } }
    /**
     * Find zero or one EventGatekeeper that matches the filter.
     * @param {EventGatekeeperFindUniqueArgs} args - Arguments to find a EventGatekeeper
     * @example
     * // Get one EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventGatekeeperFindUniqueArgs>(args: SelectSubset<T, EventGatekeeperFindUniqueArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventGatekeeper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventGatekeeperFindUniqueOrThrowArgs} args - Arguments to find a EventGatekeeper
     * @example
     * // Get one EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventGatekeeperFindUniqueOrThrowArgs>(args: SelectSubset<T, EventGatekeeperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventGatekeeper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperFindFirstArgs} args - Arguments to find a EventGatekeeper
     * @example
     * // Get one EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventGatekeeperFindFirstArgs>(args?: SelectSubset<T, EventGatekeeperFindFirstArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventGatekeeper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperFindFirstOrThrowArgs} args - Arguments to find a EventGatekeeper
     * @example
     * // Get one EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventGatekeeperFindFirstOrThrowArgs>(args?: SelectSubset<T, EventGatekeeperFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventGatekeepers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventGatekeepers
     * const eventGatekeepers = await prisma.eventGatekeeper.findMany()
     * 
     * // Get first 10 EventGatekeepers
     * const eventGatekeepers = await prisma.eventGatekeeper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventGatekeeperWithIdOnly = await prisma.eventGatekeeper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventGatekeeperFindManyArgs>(args?: SelectSubset<T, EventGatekeeperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventGatekeeper.
     * @param {EventGatekeeperCreateArgs} args - Arguments to create a EventGatekeeper.
     * @example
     * // Create one EventGatekeeper
     * const EventGatekeeper = await prisma.eventGatekeeper.create({
     *   data: {
     *     // ... data to create a EventGatekeeper
     *   }
     * })
     * 
     */
    create<T extends EventGatekeeperCreateArgs>(args: SelectSubset<T, EventGatekeeperCreateArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventGatekeepers.
     * @param {EventGatekeeperCreateManyArgs} args - Arguments to create many EventGatekeepers.
     * @example
     * // Create many EventGatekeepers
     * const eventGatekeeper = await prisma.eventGatekeeper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventGatekeeperCreateManyArgs>(args?: SelectSubset<T, EventGatekeeperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventGatekeepers and returns the data saved in the database.
     * @param {EventGatekeeperCreateManyAndReturnArgs} args - Arguments to create many EventGatekeepers.
     * @example
     * // Create many EventGatekeepers
     * const eventGatekeeper = await prisma.eventGatekeeper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventGatekeepers and only return the `id`
     * const eventGatekeeperWithIdOnly = await prisma.eventGatekeeper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventGatekeeperCreateManyAndReturnArgs>(args?: SelectSubset<T, EventGatekeeperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventGatekeeper.
     * @param {EventGatekeeperDeleteArgs} args - Arguments to delete one EventGatekeeper.
     * @example
     * // Delete one EventGatekeeper
     * const EventGatekeeper = await prisma.eventGatekeeper.delete({
     *   where: {
     *     // ... filter to delete one EventGatekeeper
     *   }
     * })
     * 
     */
    delete<T extends EventGatekeeperDeleteArgs>(args: SelectSubset<T, EventGatekeeperDeleteArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventGatekeeper.
     * @param {EventGatekeeperUpdateArgs} args - Arguments to update one EventGatekeeper.
     * @example
     * // Update one EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventGatekeeperUpdateArgs>(args: SelectSubset<T, EventGatekeeperUpdateArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventGatekeepers.
     * @param {EventGatekeeperDeleteManyArgs} args - Arguments to filter EventGatekeepers to delete.
     * @example
     * // Delete a few EventGatekeepers
     * const { count } = await prisma.eventGatekeeper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventGatekeeperDeleteManyArgs>(args?: SelectSubset<T, EventGatekeeperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventGatekeepers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventGatekeepers
     * const eventGatekeeper = await prisma.eventGatekeeper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventGatekeeperUpdateManyArgs>(args: SelectSubset<T, EventGatekeeperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventGatekeepers and returns the data updated in the database.
     * @param {EventGatekeeperUpdateManyAndReturnArgs} args - Arguments to update many EventGatekeepers.
     * @example
     * // Update many EventGatekeepers
     * const eventGatekeeper = await prisma.eventGatekeeper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventGatekeepers and only return the `id`
     * const eventGatekeeperWithIdOnly = await prisma.eventGatekeeper.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventGatekeeperUpdateManyAndReturnArgs>(args: SelectSubset<T, EventGatekeeperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventGatekeeper.
     * @param {EventGatekeeperUpsertArgs} args - Arguments to update or create a EventGatekeeper.
     * @example
     * // Update or create a EventGatekeeper
     * const eventGatekeeper = await prisma.eventGatekeeper.upsert({
     *   create: {
     *     // ... data to create a EventGatekeeper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventGatekeeper we want to update
     *   }
     * })
     */
    upsert<T extends EventGatekeeperUpsertArgs>(args: SelectSubset<T, EventGatekeeperUpsertArgs<ExtArgs>>): Prisma__EventGatekeeperClient<$Result.GetResult<Prisma.$EventGatekeeperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventGatekeepers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperCountArgs} args - Arguments to filter EventGatekeepers to count.
     * @example
     * // Count the number of EventGatekeepers
     * const count = await prisma.eventGatekeeper.count({
     *   where: {
     *     // ... the filter for the EventGatekeepers we want to count
     *   }
     * })
    **/
    count<T extends EventGatekeeperCountArgs>(
      args?: Subset<T, EventGatekeeperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventGatekeeperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventGatekeeper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventGatekeeperAggregateArgs>(args: Subset<T, EventGatekeeperAggregateArgs>): Prisma.PrismaPromise<GetEventGatekeeperAggregateType<T>>

    /**
     * Group by EventGatekeeper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGatekeeperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGatekeeperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGatekeeperGroupByArgs['orderBy'] }
        : { orderBy?: EventGatekeeperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGatekeeperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGatekeeperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventGatekeeper model
   */
  readonly fields: EventGatekeeperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventGatekeeper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventGatekeeperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gatekeeper<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventGatekeeper model
   */
  interface EventGatekeeperFieldRefs {
    readonly id: FieldRef<"EventGatekeeper", 'String'>
    readonly eventId: FieldRef<"EventGatekeeper", 'String'>
    readonly gatekeeperId: FieldRef<"EventGatekeeper", 'String'>
    readonly assignedAt: FieldRef<"EventGatekeeper", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventGatekeeper findUnique
   */
  export type EventGatekeeperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter, which EventGatekeeper to fetch.
     */
    where: EventGatekeeperWhereUniqueInput
  }

  /**
   * EventGatekeeper findUniqueOrThrow
   */
  export type EventGatekeeperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter, which EventGatekeeper to fetch.
     */
    where: EventGatekeeperWhereUniqueInput
  }

  /**
   * EventGatekeeper findFirst
   */
  export type EventGatekeeperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter, which EventGatekeeper to fetch.
     */
    where?: EventGatekeeperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGatekeepers to fetch.
     */
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventGatekeepers.
     */
    cursor?: EventGatekeeperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGatekeepers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGatekeepers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventGatekeepers.
     */
    distinct?: EventGatekeeperScalarFieldEnum | EventGatekeeperScalarFieldEnum[]
  }

  /**
   * EventGatekeeper findFirstOrThrow
   */
  export type EventGatekeeperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter, which EventGatekeeper to fetch.
     */
    where?: EventGatekeeperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGatekeepers to fetch.
     */
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventGatekeepers.
     */
    cursor?: EventGatekeeperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGatekeepers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGatekeepers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventGatekeepers.
     */
    distinct?: EventGatekeeperScalarFieldEnum | EventGatekeeperScalarFieldEnum[]
  }

  /**
   * EventGatekeeper findMany
   */
  export type EventGatekeeperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter, which EventGatekeepers to fetch.
     */
    where?: EventGatekeeperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventGatekeepers to fetch.
     */
    orderBy?: EventGatekeeperOrderByWithRelationInput | EventGatekeeperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventGatekeepers.
     */
    cursor?: EventGatekeeperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventGatekeepers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventGatekeepers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventGatekeepers.
     */
    distinct?: EventGatekeeperScalarFieldEnum | EventGatekeeperScalarFieldEnum[]
  }

  /**
   * EventGatekeeper create
   */
  export type EventGatekeeperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * The data needed to create a EventGatekeeper.
     */
    data: XOR<EventGatekeeperCreateInput, EventGatekeeperUncheckedCreateInput>
  }

  /**
   * EventGatekeeper createMany
   */
  export type EventGatekeeperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventGatekeepers.
     */
    data: EventGatekeeperCreateManyInput | EventGatekeeperCreateManyInput[]
  }

  /**
   * EventGatekeeper createManyAndReturn
   */
  export type EventGatekeeperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * The data used to create many EventGatekeepers.
     */
    data: EventGatekeeperCreateManyInput | EventGatekeeperCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventGatekeeper update
   */
  export type EventGatekeeperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * The data needed to update a EventGatekeeper.
     */
    data: XOR<EventGatekeeperUpdateInput, EventGatekeeperUncheckedUpdateInput>
    /**
     * Choose, which EventGatekeeper to update.
     */
    where: EventGatekeeperWhereUniqueInput
  }

  /**
   * EventGatekeeper updateMany
   */
  export type EventGatekeeperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventGatekeepers.
     */
    data: XOR<EventGatekeeperUpdateManyMutationInput, EventGatekeeperUncheckedUpdateManyInput>
    /**
     * Filter which EventGatekeepers to update
     */
    where?: EventGatekeeperWhereInput
    /**
     * Limit how many EventGatekeepers to update.
     */
    limit?: number
  }

  /**
   * EventGatekeeper updateManyAndReturn
   */
  export type EventGatekeeperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * The data used to update EventGatekeepers.
     */
    data: XOR<EventGatekeeperUpdateManyMutationInput, EventGatekeeperUncheckedUpdateManyInput>
    /**
     * Filter which EventGatekeepers to update
     */
    where?: EventGatekeeperWhereInput
    /**
     * Limit how many EventGatekeepers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventGatekeeper upsert
   */
  export type EventGatekeeperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * The filter to search for the EventGatekeeper to update in case it exists.
     */
    where: EventGatekeeperWhereUniqueInput
    /**
     * In case the EventGatekeeper found by the `where` argument doesn't exist, create a new EventGatekeeper with this data.
     */
    create: XOR<EventGatekeeperCreateInput, EventGatekeeperUncheckedCreateInput>
    /**
     * In case the EventGatekeeper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventGatekeeperUpdateInput, EventGatekeeperUncheckedUpdateInput>
  }

  /**
   * EventGatekeeper delete
   */
  export type EventGatekeeperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
    /**
     * Filter which EventGatekeeper to delete.
     */
    where: EventGatekeeperWhereUniqueInput
  }

  /**
   * EventGatekeeper deleteMany
   */
  export type EventGatekeeperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventGatekeepers to delete
     */
    where?: EventGatekeeperWhereInput
    /**
     * Limit how many EventGatekeepers to delete.
     */
    limit?: number
  }

  /**
   * EventGatekeeper without action
   */
  export type EventGatekeeperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventGatekeeper
     */
    select?: EventGatekeeperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventGatekeeper
     */
    omit?: EventGatekeeperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventGatekeeperInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeAvgAggregateOutputType = {
    price: number | null
    quantityAvailable: number | null
  }

  export type TicketTypeSumAggregateOutputType = {
    price: number | null
    quantityAvailable: number | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    price: number | null
    description: string | null
    quantityAvailable: number | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    price: number | null
    description: string | null
    quantityAvailable: number | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    eventId: number
    name: number
    price: number
    description: number
    quantityAvailable: number
    _all: number
  }


  export type TicketTypeAvgAggregateInputType = {
    price?: true
    quantityAvailable?: true
  }

  export type TicketTypeSumAggregateInputType = {
    price?: true
    quantityAvailable?: true
  }

  export type TicketTypeMinAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    description?: true
    quantityAvailable?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    description?: true
    quantityAvailable?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    description?: true
    quantityAvailable?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _avg?: TicketTypeAvgAggregateInputType
    _sum?: TicketTypeSumAggregateInputType
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: string
    eventId: string
    name: string
    price: number
    description: string | null
    quantityAvailable: number
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    quantityAvailable?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    tickets?: boolean | TicketType$ticketsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    quantityAvailable?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    quantityAvailable?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectScalar = {
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    quantityAvailable?: boolean
  }

  export type TicketTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "name" | "price" | "description" | "quantityAvailable", ExtArgs["result"]["ticketType"]>
  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    tickets?: boolean | TicketType$ticketsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      name: string
      price: number
      description: string | null
      quantityAvailable: number
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTypes and returns the data saved in the database.
     * @param {TicketTypeCreateManyAndReturnArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes and returns the data updated in the database.
     * @param {TicketTypeUpdateManyAndReturnArgs} args - Arguments to update many TicketTypes.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends TicketType$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'String'>
    readonly eventId: FieldRef<"TicketType", 'String'>
    readonly name: FieldRef<"TicketType", 'String'>
    readonly price: FieldRef<"TicketType", 'Float'>
    readonly description: FieldRef<"TicketType", 'String'>
    readonly quantityAvailable: FieldRef<"TicketType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
  }

  /**
   * TicketType createManyAndReturn
   */
  export type TicketTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
  }

  /**
   * TicketType updateManyAndReturn
   */
  export type TicketTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number
  }

  /**
   * TicketType.tickets
   */
  export type TicketType$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketTypeId: string | null
    buyerId: string | null
    seatId: string | null
    buyerName: string | null
    accessCode: string | null
    qrCodeToken: string | null
    shareToken: string | null
    status: string | null
    validatedAt: Date | null
    validatedById: string | null
    purchasedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketTypeId: string | null
    buyerId: string | null
    seatId: string | null
    buyerName: string | null
    accessCode: string | null
    qrCodeToken: string | null
    shareToken: string | null
    status: string | null
    validatedAt: Date | null
    validatedById: string | null
    purchasedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    eventId: number
    ticketTypeId: number
    buyerId: number
    seatId: number
    buyerName: number
    accessCode: number
    qrCodeToken: number
    shareToken: number
    status: number
    validatedAt: number
    validatedById: number
    purchasedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    buyerId?: true
    seatId?: true
    buyerName?: true
    accessCode?: true
    qrCodeToken?: true
    shareToken?: true
    status?: true
    validatedAt?: true
    validatedById?: true
    purchasedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    buyerId?: true
    seatId?: true
    buyerName?: true
    accessCode?: true
    qrCodeToken?: true
    shareToken?: true
    status?: true
    validatedAt?: true
    validatedById?: true
    purchasedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    buyerId?: true
    seatId?: true
    buyerName?: true
    accessCode?: true
    qrCodeToken?: true
    shareToken?: true
    status?: true
    validatedAt?: true
    validatedById?: true
    purchasedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    seatId: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status: string
    validatedAt: Date | null
    validatedById: string | null
    purchasedAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    buyerId?: boolean
    seatId?: boolean
    buyerName?: boolean
    accessCode?: boolean
    qrCodeToken?: boolean
    shareToken?: boolean
    status?: boolean
    validatedAt?: boolean
    validatedById?: boolean
    purchasedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    buyerId?: boolean
    seatId?: boolean
    buyerName?: boolean
    accessCode?: boolean
    qrCodeToken?: boolean
    shareToken?: boolean
    status?: boolean
    validatedAt?: boolean
    validatedById?: boolean
    purchasedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    buyerId?: boolean
    seatId?: boolean
    buyerName?: boolean
    accessCode?: boolean
    qrCodeToken?: boolean
    shareToken?: boolean
    status?: boolean
    validatedAt?: boolean
    validatedById?: boolean
    purchasedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    buyerId?: boolean
    seatId?: boolean
    buyerName?: boolean
    accessCode?: boolean
    qrCodeToken?: boolean
    shareToken?: boolean
    status?: boolean
    validatedAt?: boolean
    validatedById?: boolean
    purchasedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "ticketTypeId" | "buyerId" | "seatId" | "buyerName" | "accessCode" | "qrCodeToken" | "shareToken" | "status" | "validatedAt" | "validatedById" | "purchasedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | Ticket$seatArgs<ExtArgs>
    validatedBy?: boolean | Ticket$validatedByArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      ticketType: Prisma.$TicketTypePayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs> | null
      validatedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      ticketTypeId: string
      buyerId: string
      seatId: string | null
      buyerName: string
      accessCode: string
      qrCodeToken: string
      shareToken: string
      status: string
      validatedAt: Date | null
      validatedById: string | null
      purchasedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends Ticket$seatArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$seatArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    validatedBy<T extends Ticket$validatedByArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$validatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly eventId: FieldRef<"Ticket", 'String'>
    readonly ticketTypeId: FieldRef<"Ticket", 'String'>
    readonly buyerId: FieldRef<"Ticket", 'String'>
    readonly seatId: FieldRef<"Ticket", 'String'>
    readonly buyerName: FieldRef<"Ticket", 'String'>
    readonly accessCode: FieldRef<"Ticket", 'String'>
    readonly qrCodeToken: FieldRef<"Ticket", 'String'>
    readonly shareToken: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly validatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly validatedById: FieldRef<"Ticket", 'String'>
    readonly purchasedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.seat
   */
  export type Ticket$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
  }

  /**
   * Ticket.validatedBy
   */
  export type Ticket$validatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    cpf: 'cpf',
    phone: 'phone',
    birthDate: 'birthDate',
    profilePictureUrl: 'profilePictureUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    hasAssignedSeats: 'hasAssignedSeats',
    totalCapacity: 'totalCapacity'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    rowLabel: 'rowLabel',
    seatNumber: 'seatNumber',
    gridX: 'gridX',
    gridY: 'gridY',
    seatType: 'seatType'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    venueId: 'venueId',
    title: 'title',
    description: 'description',
    bannerUrl: 'bannerUrl',
    eventType: 'eventType',
    startTime: 'startTime',
    externalApiSource: 'externalApiSource',
    externalApiId: 'externalApiId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventSeatScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    seatId: 'seatId',
    status: 'status',
    reservedById: 'reservedById',
    reservationExpiresAt: 'reservationExpiresAt'
  };

  export type EventSeatScalarFieldEnum = (typeof EventSeatScalarFieldEnum)[keyof typeof EventSeatScalarFieldEnum]


  export const EventGatekeeperScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    gatekeeperId: 'gatekeeperId',
    assignedAt: 'assignedAt'
  };

  export type EventGatekeeperScalarFieldEnum = (typeof EventGatekeeperScalarFieldEnum)[keyof typeof EventGatekeeperScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    price: 'price',
    description: 'description',
    quantityAvailable: 'quantityAvailable'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    ticketTypeId: 'ticketTypeId',
    buyerId: 'buyerId',
    seatId: 'seatId',
    buyerName: 'buyerName',
    accessCode: 'accessCode',
    qrCodeToken: 'qrCodeToken',
    shareToken: 'shareToken',
    status: 'status',
    validatedAt: 'validatedAt',
    validatedById: 'validatedById',
    purchasedAt: 'purchasedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    organizedEvents?: EventListRelationFilter
    gatekeeperAssignments?: EventGatekeeperListRelationFilter
    reservedSeats?: EventSeatListRelationFilter
    purchasedTickets?: TicketListRelationFilter
    validatedTickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    cpf?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    organizedEvents?: EventOrderByRelationAggregateInput
    gatekeeperAssignments?: EventGatekeeperOrderByRelationAggregateInput
    reservedSeats?: EventSeatOrderByRelationAggregateInput
    purchasedTickets?: TicketOrderByRelationAggregateInput
    validatedTickets?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    organizedEvents?: EventListRelationFilter
    gatekeeperAssignments?: EventGatekeeperListRelationFilter
    reservedSeats?: EventSeatListRelationFilter
    purchasedTickets?: TicketListRelationFilter
    validatedTickets?: TicketListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    cpf?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    hasAssignedSeats?: BoolFilter<"Venue"> | boolean
    totalCapacity?: IntFilter<"Venue"> | number
    seats?: SeatListRelationFilter
    events?: EventListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hasAssignedSeats?: SortOrder
    totalCapacity?: SortOrder
    seats?: SeatOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    hasAssignedSeats?: BoolFilter<"Venue"> | boolean
    totalCapacity?: IntFilter<"Venue"> | number
    seats?: SeatListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hasAssignedSeats?: SortOrder
    totalCapacity?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    hasAssignedSeats?: BoolWithAggregatesFilter<"Venue"> | boolean
    totalCapacity?: IntWithAggregatesFilter<"Venue"> | number
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: StringFilter<"Seat"> | string
    venueId?: StringFilter<"Seat"> | string
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    gridX?: IntFilter<"Seat"> | number
    gridY?: IntFilter<"Seat"> | number
    seatType?: StringFilter<"Seat"> | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    eventSeats?: EventSeatListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
    seatType?: SortOrder
    venue?: VenueOrderByWithRelationInput
    eventSeats?: EventSeatOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    venueId_rowLabel_seatNumber?: SeatVenueIdRowLabelSeatNumberCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    venueId?: StringFilter<"Seat"> | string
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    gridX?: IntFilter<"Seat"> | number
    gridY?: IntFilter<"Seat"> | number
    seatType?: StringFilter<"Seat"> | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    eventSeats?: EventSeatListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "venueId_rowLabel_seatNumber">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
    seatType?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seat"> | string
    venueId?: StringWithAggregatesFilter<"Seat"> | string
    rowLabel?: StringWithAggregatesFilter<"Seat"> | string
    seatNumber?: IntWithAggregatesFilter<"Seat"> | number
    gridX?: IntWithAggregatesFilter<"Seat"> | number
    gridY?: IntWithAggregatesFilter<"Seat"> | number
    seatType?: StringWithAggregatesFilter<"Seat"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    organizerId?: StringFilter<"Event"> | string
    venueId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    bannerUrl?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    externalApiSource?: StringNullableFilter<"Event"> | string | null
    externalApiId?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    eventSeats?: EventSeatListRelationFilter
    gatekeepers?: EventGatekeeperListRelationFilter
    ticketTypes?: TicketTypeListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    eventType?: SortOrder
    startTime?: SortOrder
    externalApiSource?: SortOrderInput | SortOrder
    externalApiId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
    eventSeats?: EventSeatOrderByRelationAggregateInput
    gatekeepers?: EventGatekeeperOrderByRelationAggregateInput
    ticketTypes?: TicketTypeOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizerId?: StringFilter<"Event"> | string
    venueId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    bannerUrl?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    externalApiSource?: StringNullableFilter<"Event"> | string | null
    externalApiId?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    eventSeats?: EventSeatListRelationFilter
    gatekeepers?: EventGatekeeperListRelationFilter
    ticketTypes?: TicketTypeListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    eventType?: SortOrder
    startTime?: SortOrder
    externalApiSource?: SortOrderInput | SortOrder
    externalApiId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    venueId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventType?: StringWithAggregatesFilter<"Event"> | string
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    externalApiSource?: StringNullableWithAggregatesFilter<"Event"> | string | null
    externalApiId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    status?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventSeatWhereInput = {
    AND?: EventSeatWhereInput | EventSeatWhereInput[]
    OR?: EventSeatWhereInput[]
    NOT?: EventSeatWhereInput | EventSeatWhereInput[]
    id?: StringFilter<"EventSeat"> | string
    eventId?: StringFilter<"EventSeat"> | string
    seatId?: StringFilter<"EventSeat"> | string
    status?: StringFilter<"EventSeat"> | string
    reservedById?: StringNullableFilter<"EventSeat"> | string | null
    reservationExpiresAt?: DateTimeNullableFilter<"EventSeat"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
    reservedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EventSeatOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    seatId?: SortOrder
    status?: SortOrder
    reservedById?: SortOrderInput | SortOrder
    reservationExpiresAt?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    reservedBy?: UserOrderByWithRelationInput
  }

  export type EventSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_seatId?: EventSeatEventIdSeatIdCompoundUniqueInput
    AND?: EventSeatWhereInput | EventSeatWhereInput[]
    OR?: EventSeatWhereInput[]
    NOT?: EventSeatWhereInput | EventSeatWhereInput[]
    eventId?: StringFilter<"EventSeat"> | string
    seatId?: StringFilter<"EventSeat"> | string
    status?: StringFilter<"EventSeat"> | string
    reservedById?: StringNullableFilter<"EventSeat"> | string | null
    reservationExpiresAt?: DateTimeNullableFilter<"EventSeat"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
    reservedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "eventId_seatId">

  export type EventSeatOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    seatId?: SortOrder
    status?: SortOrder
    reservedById?: SortOrderInput | SortOrder
    reservationExpiresAt?: SortOrderInput | SortOrder
    _count?: EventSeatCountOrderByAggregateInput
    _max?: EventSeatMaxOrderByAggregateInput
    _min?: EventSeatMinOrderByAggregateInput
  }

  export type EventSeatScalarWhereWithAggregatesInput = {
    AND?: EventSeatScalarWhereWithAggregatesInput | EventSeatScalarWhereWithAggregatesInput[]
    OR?: EventSeatScalarWhereWithAggregatesInput[]
    NOT?: EventSeatScalarWhereWithAggregatesInput | EventSeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventSeat"> | string
    eventId?: StringWithAggregatesFilter<"EventSeat"> | string
    seatId?: StringWithAggregatesFilter<"EventSeat"> | string
    status?: StringWithAggregatesFilter<"EventSeat"> | string
    reservedById?: StringNullableWithAggregatesFilter<"EventSeat"> | string | null
    reservationExpiresAt?: DateTimeNullableWithAggregatesFilter<"EventSeat"> | Date | string | null
  }

  export type EventGatekeeperWhereInput = {
    AND?: EventGatekeeperWhereInput | EventGatekeeperWhereInput[]
    OR?: EventGatekeeperWhereInput[]
    NOT?: EventGatekeeperWhereInput | EventGatekeeperWhereInput[]
    id?: StringFilter<"EventGatekeeper"> | string
    eventId?: StringFilter<"EventGatekeeper"> | string
    gatekeeperId?: StringFilter<"EventGatekeeper"> | string
    assignedAt?: DateTimeFilter<"EventGatekeeper"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    gatekeeper?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventGatekeeperOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    gatekeeperId?: SortOrder
    assignedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    gatekeeper?: UserOrderByWithRelationInput
  }

  export type EventGatekeeperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_gatekeeperId?: EventGatekeeperEventIdGatekeeperIdCompoundUniqueInput
    AND?: EventGatekeeperWhereInput | EventGatekeeperWhereInput[]
    OR?: EventGatekeeperWhereInput[]
    NOT?: EventGatekeeperWhereInput | EventGatekeeperWhereInput[]
    eventId?: StringFilter<"EventGatekeeper"> | string
    gatekeeperId?: StringFilter<"EventGatekeeper"> | string
    assignedAt?: DateTimeFilter<"EventGatekeeper"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    gatekeeper?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "eventId_gatekeeperId">

  export type EventGatekeeperOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    gatekeeperId?: SortOrder
    assignedAt?: SortOrder
    _count?: EventGatekeeperCountOrderByAggregateInput
    _max?: EventGatekeeperMaxOrderByAggregateInput
    _min?: EventGatekeeperMinOrderByAggregateInput
  }

  export type EventGatekeeperScalarWhereWithAggregatesInput = {
    AND?: EventGatekeeperScalarWhereWithAggregatesInput | EventGatekeeperScalarWhereWithAggregatesInput[]
    OR?: EventGatekeeperScalarWhereWithAggregatesInput[]
    NOT?: EventGatekeeperScalarWhereWithAggregatesInput | EventGatekeeperScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventGatekeeper"> | string
    eventId?: StringWithAggregatesFilter<"EventGatekeeper"> | string
    gatekeeperId?: StringWithAggregatesFilter<"EventGatekeeper"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"EventGatekeeper"> | Date | string
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: StringFilter<"TicketType"> | string
    eventId?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    price?: FloatFilter<"TicketType"> | number
    description?: StringNullableFilter<"TicketType"> | string | null
    quantityAvailable?: IntFilter<"TicketType"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    quantityAvailable?: SortOrder
    event?: EventOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    eventId?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    price?: FloatFilter<"TicketType"> | number
    description?: StringNullableFilter<"TicketType"> | string | null
    quantityAvailable?: IntFilter<"TicketType"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    tickets?: TicketListRelationFilter
  }, "id">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    quantityAvailable?: SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _avg?: TicketTypeAvgOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
    _sum?: TicketTypeSumOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketType"> | string
    eventId?: StringWithAggregatesFilter<"TicketType"> | string
    name?: StringWithAggregatesFilter<"TicketType"> | string
    price?: FloatWithAggregatesFilter<"TicketType"> | number
    description?: StringNullableWithAggregatesFilter<"TicketType"> | string | null
    quantityAvailable?: IntWithAggregatesFilter<"TicketType"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    ticketTypeId?: StringFilter<"Ticket"> | string
    buyerId?: StringFilter<"Ticket"> | string
    seatId?: StringNullableFilter<"Ticket"> | string | null
    buyerName?: StringFilter<"Ticket"> | string
    accessCode?: StringFilter<"Ticket"> | string
    qrCodeToken?: StringFilter<"Ticket"> | string
    shareToken?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    validatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    purchasedAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatNullableScalarRelationFilter, SeatWhereInput> | null
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    buyerId?: SortOrder
    seatId?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    accessCode?: SortOrder
    qrCodeToken?: SortOrder
    shareToken?: SortOrder
    status?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
    validatedById?: SortOrderInput | SortOrder
    purchasedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    ticketType?: TicketTypeOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    validatedBy?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessCode?: string
    qrCodeToken?: string
    shareToken?: string
    eventId_seatId?: TicketEventIdSeatIdCompoundUniqueInput
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    eventId?: StringFilter<"Ticket"> | string
    ticketTypeId?: StringFilter<"Ticket"> | string
    buyerId?: StringFilter<"Ticket"> | string
    seatId?: StringNullableFilter<"Ticket"> | string | null
    buyerName?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    validatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    purchasedAt?: DateTimeFilter<"Ticket"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatNullableScalarRelationFilter, SeatWhereInput> | null
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "accessCode" | "qrCodeToken" | "shareToken" | "eventId_seatId">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    buyerId?: SortOrder
    seatId?: SortOrderInput | SortOrder
    buyerName?: SortOrder
    accessCode?: SortOrder
    qrCodeToken?: SortOrder
    shareToken?: SortOrder
    status?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
    validatedById?: SortOrderInput | SortOrder
    purchasedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    eventId?: StringWithAggregatesFilter<"Ticket"> | string
    ticketTypeId?: StringWithAggregatesFilter<"Ticket"> | string
    buyerId?: StringWithAggregatesFilter<"Ticket"> | string
    seatId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    buyerName?: StringWithAggregatesFilter<"Ticket"> | string
    accessCode?: StringWithAggregatesFilter<"Ticket"> | string
    qrCodeToken?: StringWithAggregatesFilter<"Ticket"> | string
    shareToken?: StringWithAggregatesFilter<"Ticket"> | string
    status?: StringWithAggregatesFilter<"Ticket"> | string
    validatedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    validatedById?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    purchasedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    seats?: SeatCreateNestedManyWithoutVenueInput
    events?: EventCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    seats?: SeatUncheckedCreateNestedManyWithoutVenueInput
    events?: EventUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    seats?: SeatUpdateManyWithoutVenueNestedInput
    events?: EventUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    seats?: SeatUncheckedUpdateManyWithoutVenueNestedInput
    events?: EventUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
  }

  export type SeatCreateInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    venue: VenueCreateNestedOneWithoutSeatsInput
    eventSeats?: EventSeatCreateNestedManyWithoutSeatInput
    tickets?: TicketCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateInput = {
    id?: string
    venueId: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutSeatInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    venue?: VenueUpdateOneRequiredWithoutSeatsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutSeatNestedInput
    tickets?: TicketUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutSeatNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: string
    venueId: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
  }

  export type SeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    venue: VenueCreateNestedOneWithoutEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSeatCreateInput = {
    id?: string
    status?: string
    reservationExpiresAt?: Date | string | null
    event: EventCreateNestedOneWithoutEventSeatsInput
    seat: SeatCreateNestedOneWithoutEventSeatsInput
    reservedBy?: UserCreateNestedOneWithoutReservedSeatsInput
  }

  export type EventSeatUncheckedCreateInput = {
    id?: string
    eventId: string
    seatId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type EventSeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutEventSeatsNestedInput
    seat?: SeatUpdateOneRequiredWithoutEventSeatsNestedInput
    reservedBy?: UserUpdateOneWithoutReservedSeatsNestedInput
  }

  export type EventSeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventSeatCreateManyInput = {
    id?: string
    eventId: string
    seatId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type EventSeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventSeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventGatekeeperCreateInput = {
    id?: string
    assignedAt?: Date | string
    event: EventCreateNestedOneWithoutGatekeepersInput
    gatekeeper: UserCreateNestedOneWithoutGatekeeperAssignmentsInput
  }

  export type EventGatekeeperUncheckedCreateInput = {
    id?: string
    eventId: string
    gatekeeperId: string
    assignedAt?: Date | string
  }

  export type EventGatekeeperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGatekeepersNestedInput
    gatekeeper?: UserUpdateOneRequiredWithoutGatekeeperAssignmentsNestedInput
  }

  export type EventGatekeeperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    gatekeeperId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGatekeeperCreateManyInput = {
    id?: string
    eventId: string
    gatekeeperId: string
    assignedAt?: Date | string
  }

  export type EventGatekeeperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGatekeeperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    gatekeeperId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeCreateInput = {
    id?: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
    event: EventCreateNestedOneWithoutTicketTypesInput
    tickets?: TicketCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: string
    eventId: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
    tickets?: TicketUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: string
    eventId: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
  }

  export type TicketTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    buyer: UserCreateNestedOneWithoutPurchasedTicketsInput
    seat?: SeatCreateNestedOneWithoutTicketsInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput
    seat?: SeatUpdateOneWithoutTicketsNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventGatekeeperListRelationFilter = {
    every?: EventGatekeeperWhereInput
    some?: EventGatekeeperWhereInput
    none?: EventGatekeeperWhereInput
  }

  export type EventSeatListRelationFilter = {
    every?: EventSeatWhereInput
    some?: EventSeatWhereInput
    none?: EventSeatWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventGatekeeperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    profilePictureUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hasAssignedSeats?: SortOrder
    totalCapacity?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    totalCapacity?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hasAssignedSeats?: SortOrder
    totalCapacity?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    hasAssignedSeats?: SortOrder
    totalCapacity?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    totalCapacity?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type SeatVenueIdRowLabelSeatNumberCompoundUniqueInput = {
    venueId: string
    rowLabel: string
    seatNumber: number
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
    seatType?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
    seatType?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    rowLabel?: SortOrder
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
    seatType?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    seatNumber?: SortOrder
    gridX?: SortOrder
    gridY?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TicketTypeListRelationFilter = {
    every?: TicketTypeWhereInput
    some?: TicketTypeWhereInput
    none?: TicketTypeWhereInput
  }

  export type TicketTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bannerUrl?: SortOrder
    eventType?: SortOrder
    startTime?: SortOrder
    externalApiSource?: SortOrder
    externalApiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bannerUrl?: SortOrder
    eventType?: SortOrder
    startTime?: SortOrder
    externalApiSource?: SortOrder
    externalApiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bannerUrl?: SortOrder
    eventType?: SortOrder
    startTime?: SortOrder
    externalApiSource?: SortOrder
    externalApiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type SeatScalarRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventSeatEventIdSeatIdCompoundUniqueInput = {
    eventId: string
    seatId: string
  }

  export type EventSeatCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    seatId?: SortOrder
    status?: SortOrder
    reservedById?: SortOrder
    reservationExpiresAt?: SortOrder
  }

  export type EventSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    seatId?: SortOrder
    status?: SortOrder
    reservedById?: SortOrder
    reservationExpiresAt?: SortOrder
  }

  export type EventSeatMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    seatId?: SortOrder
    status?: SortOrder
    reservedById?: SortOrder
    reservationExpiresAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventGatekeeperEventIdGatekeeperIdCompoundUniqueInput = {
    eventId: string
    gatekeeperId: string
  }

  export type EventGatekeeperCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    gatekeeperId?: SortOrder
    assignedAt?: SortOrder
  }

  export type EventGatekeeperMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    gatekeeperId?: SortOrder
    assignedAt?: SortOrder
  }

  export type EventGatekeeperMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    gatekeeperId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type TicketTypeAvgOrderByAggregateInput = {
    price?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type TicketTypeSumOrderByAggregateInput = {
    price?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TicketTypeScalarRelationFilter = {
    is?: TicketTypeWhereInput
    isNot?: TicketTypeWhereInput
  }

  export type SeatNullableScalarRelationFilter = {
    is?: SeatWhereInput | null
    isNot?: SeatWhereInput | null
  }

  export type TicketEventIdSeatIdCompoundUniqueInput = {
    eventId: string
    seatId: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    buyerId?: SortOrder
    seatId?: SortOrder
    buyerName?: SortOrder
    accessCode?: SortOrder
    qrCodeToken?: SortOrder
    shareToken?: SortOrder
    status?: SortOrder
    validatedAt?: SortOrder
    validatedById?: SortOrder
    purchasedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    buyerId?: SortOrder
    seatId?: SortOrder
    buyerName?: SortOrder
    accessCode?: SortOrder
    qrCodeToken?: SortOrder
    shareToken?: SortOrder
    status?: SortOrder
    validatedAt?: SortOrder
    validatedById?: SortOrder
    purchasedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    buyerId?: SortOrder
    seatId?: SortOrder
    buyerName?: SortOrder
    accessCode?: SortOrder
    qrCodeToken?: SortOrder
    shareToken?: SortOrder
    status?: SortOrder
    validatedAt?: SortOrder
    validatedById?: SortOrder
    purchasedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventGatekeeperCreateNestedManyWithoutGatekeeperInput = {
    create?: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput> | EventGatekeeperCreateWithoutGatekeeperInput[] | EventGatekeeperUncheckedCreateWithoutGatekeeperInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutGatekeeperInput | EventGatekeeperCreateOrConnectWithoutGatekeeperInput[]
    createMany?: EventGatekeeperCreateManyGatekeeperInputEnvelope
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
  }

  export type EventSeatCreateNestedManyWithoutReservedByInput = {
    create?: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput> | EventSeatCreateWithoutReservedByInput[] | EventSeatUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutReservedByInput | EventSeatCreateOrConnectWithoutReservedByInput[]
    createMany?: EventSeatCreateManyReservedByInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput> | TicketCreateWithoutBuyerInput[] | TicketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBuyerInput | TicketCreateOrConnectWithoutBuyerInput[]
    createMany?: TicketCreateManyBuyerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput = {
    create?: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput> | EventGatekeeperCreateWithoutGatekeeperInput[] | EventGatekeeperUncheckedCreateWithoutGatekeeperInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutGatekeeperInput | EventGatekeeperCreateOrConnectWithoutGatekeeperInput[]
    createMany?: EventGatekeeperCreateManyGatekeeperInputEnvelope
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
  }

  export type EventSeatUncheckedCreateNestedManyWithoutReservedByInput = {
    create?: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput> | EventSeatCreateWithoutReservedByInput[] | EventSeatUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutReservedByInput | EventSeatCreateOrConnectWithoutReservedByInput[]
    createMany?: EventSeatCreateManyReservedByInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput> | TicketCreateWithoutBuyerInput[] | TicketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBuyerInput | TicketCreateOrConnectWithoutBuyerInput[]
    createMany?: TicketCreateManyBuyerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventGatekeeperUpdateManyWithoutGatekeeperNestedInput = {
    create?: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput> | EventGatekeeperCreateWithoutGatekeeperInput[] | EventGatekeeperUncheckedCreateWithoutGatekeeperInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutGatekeeperInput | EventGatekeeperCreateOrConnectWithoutGatekeeperInput[]
    upsert?: EventGatekeeperUpsertWithWhereUniqueWithoutGatekeeperInput | EventGatekeeperUpsertWithWhereUniqueWithoutGatekeeperInput[]
    createMany?: EventGatekeeperCreateManyGatekeeperInputEnvelope
    set?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    disconnect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    delete?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    update?: EventGatekeeperUpdateWithWhereUniqueWithoutGatekeeperInput | EventGatekeeperUpdateWithWhereUniqueWithoutGatekeeperInput[]
    updateMany?: EventGatekeeperUpdateManyWithWhereWithoutGatekeeperInput | EventGatekeeperUpdateManyWithWhereWithoutGatekeeperInput[]
    deleteMany?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
  }

  export type EventSeatUpdateManyWithoutReservedByNestedInput = {
    create?: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput> | EventSeatCreateWithoutReservedByInput[] | EventSeatUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutReservedByInput | EventSeatCreateOrConnectWithoutReservedByInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutReservedByInput | EventSeatUpsertWithWhereUniqueWithoutReservedByInput[]
    createMany?: EventSeatCreateManyReservedByInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutReservedByInput | EventSeatUpdateWithWhereUniqueWithoutReservedByInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutReservedByInput | EventSeatUpdateManyWithWhereWithoutReservedByInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput> | TicketCreateWithoutBuyerInput[] | TicketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBuyerInput | TicketCreateOrConnectWithoutBuyerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBuyerInput | TicketUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TicketCreateManyBuyerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBuyerInput | TicketUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBuyerInput | TicketUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutValidatedByInput | TicketUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutValidatedByInput | TicketUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutValidatedByInput | TicketUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput = {
    create?: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput> | EventGatekeeperCreateWithoutGatekeeperInput[] | EventGatekeeperUncheckedCreateWithoutGatekeeperInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutGatekeeperInput | EventGatekeeperCreateOrConnectWithoutGatekeeperInput[]
    upsert?: EventGatekeeperUpsertWithWhereUniqueWithoutGatekeeperInput | EventGatekeeperUpsertWithWhereUniqueWithoutGatekeeperInput[]
    createMany?: EventGatekeeperCreateManyGatekeeperInputEnvelope
    set?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    disconnect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    delete?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    update?: EventGatekeeperUpdateWithWhereUniqueWithoutGatekeeperInput | EventGatekeeperUpdateWithWhereUniqueWithoutGatekeeperInput[]
    updateMany?: EventGatekeeperUpdateManyWithWhereWithoutGatekeeperInput | EventGatekeeperUpdateManyWithWhereWithoutGatekeeperInput[]
    deleteMany?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
  }

  export type EventSeatUncheckedUpdateManyWithoutReservedByNestedInput = {
    create?: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput> | EventSeatCreateWithoutReservedByInput[] | EventSeatUncheckedCreateWithoutReservedByInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutReservedByInput | EventSeatCreateOrConnectWithoutReservedByInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutReservedByInput | EventSeatUpsertWithWhereUniqueWithoutReservedByInput[]
    createMany?: EventSeatCreateManyReservedByInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutReservedByInput | EventSeatUpdateWithWhereUniqueWithoutReservedByInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutReservedByInput | EventSeatUpdateManyWithWhereWithoutReservedByInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput> | TicketCreateWithoutBuyerInput[] | TicketUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBuyerInput | TicketCreateOrConnectWithoutBuyerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBuyerInput | TicketUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TicketCreateManyBuyerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBuyerInput | TicketUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBuyerInput | TicketUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput> | TicketCreateWithoutValidatedByInput[] | TicketUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutValidatedByInput | TicketCreateOrConnectWithoutValidatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutValidatedByInput | TicketUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: TicketCreateManyValidatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutValidatedByInput | TicketUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutValidatedByInput | TicketUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SeatCreateNestedManyWithoutVenueInput = {
    create?: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput> | SeatCreateWithoutVenueInput[] | SeatUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutVenueInput | SeatCreateOrConnectWithoutVenueInput[]
    createMany?: SeatCreateManyVenueInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput> | SeatCreateWithoutVenueInput[] | SeatUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutVenueInput | SeatCreateOrConnectWithoutVenueInput[]
    createMany?: SeatCreateManyVenueInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SeatUpdateManyWithoutVenueNestedInput = {
    create?: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput> | SeatCreateWithoutVenueInput[] | SeatUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutVenueInput | SeatCreateOrConnectWithoutVenueInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutVenueInput | SeatUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: SeatCreateManyVenueInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutVenueInput | SeatUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutVenueInput | SeatUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type EventUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput> | SeatCreateWithoutVenueInput[] | SeatUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutVenueInput | SeatCreateOrConnectWithoutVenueInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutVenueInput | SeatUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: SeatCreateManyVenueInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutVenueInput | SeatUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutVenueInput | SeatUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutSeatsInput = {
    create?: XOR<VenueCreateWithoutSeatsInput, VenueUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutSeatsInput
    connect?: VenueWhereUniqueInput
  }

  export type EventSeatCreateNestedManyWithoutSeatInput = {
    create?: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput> | EventSeatCreateWithoutSeatInput[] | EventSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutSeatInput | EventSeatCreateOrConnectWithoutSeatInput[]
    createMany?: EventSeatCreateManySeatInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSeatInput = {
    create?: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput> | TicketCreateWithoutSeatInput[] | TicketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSeatInput | TicketCreateOrConnectWithoutSeatInput[]
    createMany?: TicketCreateManySeatInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventSeatUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput> | EventSeatCreateWithoutSeatInput[] | EventSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutSeatInput | EventSeatCreateOrConnectWithoutSeatInput[]
    createMany?: EventSeatCreateManySeatInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput> | TicketCreateWithoutSeatInput[] | TicketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSeatInput | TicketCreateOrConnectWithoutSeatInput[]
    createMany?: TicketCreateManySeatInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type VenueUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<VenueCreateWithoutSeatsInput, VenueUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutSeatsInput
    upsert?: VenueUpsertWithoutSeatsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutSeatsInput, VenueUpdateWithoutSeatsInput>, VenueUncheckedUpdateWithoutSeatsInput>
  }

  export type EventSeatUpdateManyWithoutSeatNestedInput = {
    create?: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput> | EventSeatCreateWithoutSeatInput[] | EventSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutSeatInput | EventSeatCreateOrConnectWithoutSeatInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutSeatInput | EventSeatUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: EventSeatCreateManySeatInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutSeatInput | EventSeatUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutSeatInput | EventSeatUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSeatNestedInput = {
    create?: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput> | TicketCreateWithoutSeatInput[] | TicketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSeatInput | TicketCreateOrConnectWithoutSeatInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSeatInput | TicketUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: TicketCreateManySeatInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSeatInput | TicketUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSeatInput | TicketUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventSeatUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput> | EventSeatCreateWithoutSeatInput[] | EventSeatUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutSeatInput | EventSeatCreateOrConnectWithoutSeatInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutSeatInput | EventSeatUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: EventSeatCreateManySeatInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutSeatInput | EventSeatUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutSeatInput | EventSeatUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput> | TicketCreateWithoutSeatInput[] | TicketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSeatInput | TicketCreateOrConnectWithoutSeatInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSeatInput | TicketUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: TicketCreateManySeatInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSeatInput | TicketUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSeatInput | TicketUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganizedEventsInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutEventsInput = {
    create?: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsInput
    connect?: VenueWhereUniqueInput
  }

  export type EventSeatCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput> | EventSeatCreateWithoutEventInput[] | EventSeatUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutEventInput | EventSeatCreateOrConnectWithoutEventInput[]
    createMany?: EventSeatCreateManyEventInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type EventGatekeeperCreateNestedManyWithoutEventInput = {
    create?: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput> | EventGatekeeperCreateWithoutEventInput[] | EventGatekeeperUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutEventInput | EventGatekeeperCreateOrConnectWithoutEventInput[]
    createMany?: EventGatekeeperCreateManyEventInputEnvelope
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
  }

  export type TicketTypeCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventSeatUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput> | EventSeatCreateWithoutEventInput[] | EventSeatUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutEventInput | EventSeatCreateOrConnectWithoutEventInput[]
    createMany?: EventSeatCreateManyEventInputEnvelope
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
  }

  export type EventGatekeeperUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput> | EventGatekeeperCreateWithoutEventInput[] | EventGatekeeperUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutEventInput | EventGatekeeperCreateOrConnectWithoutEventInput[]
    createMany?: EventGatekeeperCreateManyEventInputEnvelope
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
  }

  export type TicketTypeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrganizedEventsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    upsert?: UserUpsertWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizedEventsInput, UserUpdateWithoutOrganizedEventsInput>, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type VenueUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsInput
    upsert?: VenueUpsertWithoutEventsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutEventsInput, VenueUpdateWithoutEventsInput>, VenueUncheckedUpdateWithoutEventsInput>
  }

  export type EventSeatUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput> | EventSeatCreateWithoutEventInput[] | EventSeatUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutEventInput | EventSeatCreateOrConnectWithoutEventInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutEventInput | EventSeatUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSeatCreateManyEventInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutEventInput | EventSeatUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutEventInput | EventSeatUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type EventGatekeeperUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput> | EventGatekeeperCreateWithoutEventInput[] | EventGatekeeperUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutEventInput | EventGatekeeperCreateOrConnectWithoutEventInput[]
    upsert?: EventGatekeeperUpsertWithWhereUniqueWithoutEventInput | EventGatekeeperUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventGatekeeperCreateManyEventInputEnvelope
    set?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    disconnect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    delete?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    update?: EventGatekeeperUpdateWithWhereUniqueWithoutEventInput | EventGatekeeperUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventGatekeeperUpdateManyWithWhereWithoutEventInput | EventGatekeeperUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
  }

  export type TicketTypeUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventSeatUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput> | EventSeatCreateWithoutEventInput[] | EventSeatUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSeatCreateOrConnectWithoutEventInput | EventSeatCreateOrConnectWithoutEventInput[]
    upsert?: EventSeatUpsertWithWhereUniqueWithoutEventInput | EventSeatUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSeatCreateManyEventInputEnvelope
    set?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    disconnect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    delete?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    connect?: EventSeatWhereUniqueInput | EventSeatWhereUniqueInput[]
    update?: EventSeatUpdateWithWhereUniqueWithoutEventInput | EventSeatUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSeatUpdateManyWithWhereWithoutEventInput | EventSeatUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
  }

  export type EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput> | EventGatekeeperCreateWithoutEventInput[] | EventGatekeeperUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventGatekeeperCreateOrConnectWithoutEventInput | EventGatekeeperCreateOrConnectWithoutEventInput[]
    upsert?: EventGatekeeperUpsertWithWhereUniqueWithoutEventInput | EventGatekeeperUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventGatekeeperCreateManyEventInputEnvelope
    set?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    disconnect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    delete?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    connect?: EventGatekeeperWhereUniqueInput | EventGatekeeperWhereUniqueInput[]
    update?: EventGatekeeperUpdateWithWhereUniqueWithoutEventInput | EventGatekeeperUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventGatekeeperUpdateManyWithWhereWithoutEventInput | EventGatekeeperUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventSeatsInput = {
    create?: XOR<EventCreateWithoutEventSeatsInput, EventUncheckedCreateWithoutEventSeatsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventSeatsInput
    connect?: EventWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutEventSeatsInput = {
    create?: XOR<SeatCreateWithoutEventSeatsInput, SeatUncheckedCreateWithoutEventSeatsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutEventSeatsInput
    connect?: SeatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservedSeatsInput = {
    create?: XOR<UserCreateWithoutReservedSeatsInput, UserUncheckedCreateWithoutReservedSeatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservedSeatsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateOneRequiredWithoutEventSeatsNestedInput = {
    create?: XOR<EventCreateWithoutEventSeatsInput, EventUncheckedCreateWithoutEventSeatsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventSeatsInput
    upsert?: EventUpsertWithoutEventSeatsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventSeatsInput, EventUpdateWithoutEventSeatsInput>, EventUncheckedUpdateWithoutEventSeatsInput>
  }

  export type SeatUpdateOneRequiredWithoutEventSeatsNestedInput = {
    create?: XOR<SeatCreateWithoutEventSeatsInput, SeatUncheckedCreateWithoutEventSeatsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutEventSeatsInput
    upsert?: SeatUpsertWithoutEventSeatsInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutEventSeatsInput, SeatUpdateWithoutEventSeatsInput>, SeatUncheckedUpdateWithoutEventSeatsInput>
  }

  export type UserUpdateOneWithoutReservedSeatsNestedInput = {
    create?: XOR<UserCreateWithoutReservedSeatsInput, UserUncheckedCreateWithoutReservedSeatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservedSeatsInput
    upsert?: UserUpsertWithoutReservedSeatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservedSeatsInput, UserUpdateWithoutReservedSeatsInput>, UserUncheckedUpdateWithoutReservedSeatsInput>
  }

  export type EventCreateNestedOneWithoutGatekeepersInput = {
    create?: XOR<EventCreateWithoutGatekeepersInput, EventUncheckedCreateWithoutGatekeepersInput>
    connectOrCreate?: EventCreateOrConnectWithoutGatekeepersInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGatekeeperAssignmentsInput = {
    create?: XOR<UserCreateWithoutGatekeeperAssignmentsInput, UserUncheckedCreateWithoutGatekeeperAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGatekeeperAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutGatekeepersNestedInput = {
    create?: XOR<EventCreateWithoutGatekeepersInput, EventUncheckedCreateWithoutGatekeepersInput>
    connectOrCreate?: EventCreateOrConnectWithoutGatekeepersInput
    upsert?: EventUpsertWithoutGatekeepersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGatekeepersInput, EventUpdateWithoutGatekeepersInput>, EventUncheckedUpdateWithoutGatekeepersInput>
  }

  export type UserUpdateOneRequiredWithoutGatekeeperAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutGatekeeperAssignmentsInput, UserUncheckedCreateWithoutGatekeeperAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGatekeeperAssignmentsInput
    upsert?: UserUpsertWithoutGatekeeperAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGatekeeperAssignmentsInput, UserUpdateWithoutGatekeeperAssignmentsInput>, UserUncheckedUpdateWithoutGatekeeperAssignmentsInput>
  }

  export type EventCreateNestedOneWithoutTicketTypesInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutTicketTypesNestedInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    upsert?: EventUpsertWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketTypesInput, EventUpdateWithoutTicketTypesInput>, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type TicketUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketTypeInput | TicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketTypeInput | TicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketTypeInput | TicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketTypeInput | TicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketTypeInput | TicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketTypeInput | TicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type TicketTypeCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasedTicketsInput = {
    create?: XOR<UserCreateWithoutPurchasedTicketsInput, UserUncheckedCreateWithoutPurchasedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutTicketsInput = {
    create?: XOR<SeatCreateWithoutTicketsInput, SeatUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutTicketsInput
    connect?: SeatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidatedTicketsInput = {
    create?: XOR<UserCreateWithoutValidatedTicketsInput, UserUncheckedCreateWithoutValidatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketTypeUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketsInput
    upsert?: TicketTypeUpsertWithoutTicketsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutTicketsInput, TicketTypeUpdateWithoutTicketsInput>, TicketTypeUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutPurchasedTicketsInput, UserUncheckedCreateWithoutPurchasedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedTicketsInput
    upsert?: UserUpsertWithoutPurchasedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasedTicketsInput, UserUpdateWithoutPurchasedTicketsInput>, UserUncheckedUpdateWithoutPurchasedTicketsInput>
  }

  export type SeatUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<SeatCreateWithoutTicketsInput, SeatUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutTicketsInput
    upsert?: SeatUpsertWithoutTicketsInput
    disconnect?: SeatWhereInput | boolean
    delete?: SeatWhereInput | boolean
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutTicketsInput, SeatUpdateWithoutTicketsInput>, SeatUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutValidatedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutValidatedTicketsInput, UserUncheckedCreateWithoutValidatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedTicketsInput
    upsert?: UserUpsertWithoutValidatedTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidatedTicketsInput, UserUpdateWithoutValidatedTicketsInput>, UserUncheckedUpdateWithoutValidatedTicketsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
  }

  export type EventGatekeeperCreateWithoutGatekeeperInput = {
    id?: string
    assignedAt?: Date | string
    event: EventCreateNestedOneWithoutGatekeepersInput
  }

  export type EventGatekeeperUncheckedCreateWithoutGatekeeperInput = {
    id?: string
    eventId: string
    assignedAt?: Date | string
  }

  export type EventGatekeeperCreateOrConnectWithoutGatekeeperInput = {
    where: EventGatekeeperWhereUniqueInput
    create: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput>
  }

  export type EventGatekeeperCreateManyGatekeeperInputEnvelope = {
    data: EventGatekeeperCreateManyGatekeeperInput | EventGatekeeperCreateManyGatekeeperInput[]
  }

  export type EventSeatCreateWithoutReservedByInput = {
    id?: string
    status?: string
    reservationExpiresAt?: Date | string | null
    event: EventCreateNestedOneWithoutEventSeatsInput
    seat: SeatCreateNestedOneWithoutEventSeatsInput
  }

  export type EventSeatUncheckedCreateWithoutReservedByInput = {
    id?: string
    eventId: string
    seatId: string
    status?: string
    reservationExpiresAt?: Date | string | null
  }

  export type EventSeatCreateOrConnectWithoutReservedByInput = {
    where: EventSeatWhereUniqueInput
    create: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput>
  }

  export type EventSeatCreateManyReservedByInputEnvelope = {
    data: EventSeatCreateManyReservedByInput | EventSeatCreateManyReservedByInput[]
  }

  export type TicketCreateWithoutBuyerInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    seat?: SeatCreateNestedOneWithoutTicketsInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTicketsInput
  }

  export type TicketUncheckedCreateWithoutBuyerInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutBuyerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput>
  }

  export type TicketCreateManyBuyerInputEnvelope = {
    data: TicketCreateManyBuyerInput | TicketCreateManyBuyerInput[]
  }

  export type TicketCreateWithoutValidatedByInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    buyer: UserCreateNestedOneWithoutPurchasedTicketsInput
    seat?: SeatCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutValidatedByInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput>
  }

  export type TicketCreateManyValidatedByInputEnvelope = {
    data: TicketCreateManyValidatedByInput | TicketCreateManyValidatedByInput[]
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    organizerId?: StringFilter<"Event"> | string
    venueId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    bannerUrl?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    externalApiSource?: StringNullableFilter<"Event"> | string | null
    externalApiId?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventGatekeeperUpsertWithWhereUniqueWithoutGatekeeperInput = {
    where: EventGatekeeperWhereUniqueInput
    update: XOR<EventGatekeeperUpdateWithoutGatekeeperInput, EventGatekeeperUncheckedUpdateWithoutGatekeeperInput>
    create: XOR<EventGatekeeperCreateWithoutGatekeeperInput, EventGatekeeperUncheckedCreateWithoutGatekeeperInput>
  }

  export type EventGatekeeperUpdateWithWhereUniqueWithoutGatekeeperInput = {
    where: EventGatekeeperWhereUniqueInput
    data: XOR<EventGatekeeperUpdateWithoutGatekeeperInput, EventGatekeeperUncheckedUpdateWithoutGatekeeperInput>
  }

  export type EventGatekeeperUpdateManyWithWhereWithoutGatekeeperInput = {
    where: EventGatekeeperScalarWhereInput
    data: XOR<EventGatekeeperUpdateManyMutationInput, EventGatekeeperUncheckedUpdateManyWithoutGatekeeperInput>
  }

  export type EventGatekeeperScalarWhereInput = {
    AND?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
    OR?: EventGatekeeperScalarWhereInput[]
    NOT?: EventGatekeeperScalarWhereInput | EventGatekeeperScalarWhereInput[]
    id?: StringFilter<"EventGatekeeper"> | string
    eventId?: StringFilter<"EventGatekeeper"> | string
    gatekeeperId?: StringFilter<"EventGatekeeper"> | string
    assignedAt?: DateTimeFilter<"EventGatekeeper"> | Date | string
  }

  export type EventSeatUpsertWithWhereUniqueWithoutReservedByInput = {
    where: EventSeatWhereUniqueInput
    update: XOR<EventSeatUpdateWithoutReservedByInput, EventSeatUncheckedUpdateWithoutReservedByInput>
    create: XOR<EventSeatCreateWithoutReservedByInput, EventSeatUncheckedCreateWithoutReservedByInput>
  }

  export type EventSeatUpdateWithWhereUniqueWithoutReservedByInput = {
    where: EventSeatWhereUniqueInput
    data: XOR<EventSeatUpdateWithoutReservedByInput, EventSeatUncheckedUpdateWithoutReservedByInput>
  }

  export type EventSeatUpdateManyWithWhereWithoutReservedByInput = {
    where: EventSeatScalarWhereInput
    data: XOR<EventSeatUpdateManyMutationInput, EventSeatUncheckedUpdateManyWithoutReservedByInput>
  }

  export type EventSeatScalarWhereInput = {
    AND?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
    OR?: EventSeatScalarWhereInput[]
    NOT?: EventSeatScalarWhereInput | EventSeatScalarWhereInput[]
    id?: StringFilter<"EventSeat"> | string
    eventId?: StringFilter<"EventSeat"> | string
    seatId?: StringFilter<"EventSeat"> | string
    status?: StringFilter<"EventSeat"> | string
    reservedById?: StringNullableFilter<"EventSeat"> | string | null
    reservationExpiresAt?: DateTimeNullableFilter<"EventSeat"> | Date | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBuyerInput, TicketUncheckedUpdateWithoutBuyerInput>
    create: XOR<TicketCreateWithoutBuyerInput, TicketUncheckedCreateWithoutBuyerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBuyerInput, TicketUncheckedUpdateWithoutBuyerInput>
  }

  export type TicketUpdateManyWithWhereWithoutBuyerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBuyerInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    ticketTypeId?: StringFilter<"Ticket"> | string
    buyerId?: StringFilter<"Ticket"> | string
    seatId?: StringNullableFilter<"Ticket"> | string | null
    buyerName?: StringFilter<"Ticket"> | string
    accessCode?: StringFilter<"Ticket"> | string
    qrCodeToken?: StringFilter<"Ticket"> | string
    shareToken?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    validatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    validatedById?: StringNullableFilter<"Ticket"> | string | null
    purchasedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutValidatedByInput, TicketUncheckedUpdateWithoutValidatedByInput>
    create: XOR<TicketCreateWithoutValidatedByInput, TicketUncheckedCreateWithoutValidatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutValidatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutValidatedByInput, TicketUncheckedUpdateWithoutValidatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutValidatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutValidatedByInput>
  }

  export type SeatCreateWithoutVenueInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    eventSeats?: EventSeatCreateNestedManyWithoutSeatInput
    tickets?: TicketCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutVenueInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutSeatInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutVenueInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput>
  }

  export type SeatCreateManyVenueInputEnvelope = {
    data: SeatCreateManyVenueInput | SeatCreateManyVenueInput[]
  }

  export type EventCreateWithoutVenueInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVenueInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVenueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventCreateManyVenueInputEnvelope = {
    data: EventCreateManyVenueInput | EventCreateManyVenueInput[]
  }

  export type SeatUpsertWithWhereUniqueWithoutVenueInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutVenueInput, SeatUncheckedUpdateWithoutVenueInput>
    create: XOR<SeatCreateWithoutVenueInput, SeatUncheckedCreateWithoutVenueInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutVenueInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutVenueInput, SeatUncheckedUpdateWithoutVenueInput>
  }

  export type SeatUpdateManyWithWhereWithoutVenueInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutVenueInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: StringFilter<"Seat"> | string
    venueId?: StringFilter<"Seat"> | string
    rowLabel?: StringFilter<"Seat"> | string
    seatNumber?: IntFilter<"Seat"> | number
    gridX?: IntFilter<"Seat"> | number
    gridY?: IntFilter<"Seat"> | number
    seatType?: StringFilter<"Seat"> | string
  }

  export type EventUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
  }

  export type EventUpdateManyWithWhereWithoutVenueInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueCreateWithoutSeatsInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    events?: EventCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutSeatsInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    events?: EventUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutSeatsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutSeatsInput, VenueUncheckedCreateWithoutSeatsInput>
  }

  export type EventSeatCreateWithoutSeatInput = {
    id?: string
    status?: string
    reservationExpiresAt?: Date | string | null
    event: EventCreateNestedOneWithoutEventSeatsInput
    reservedBy?: UserCreateNestedOneWithoutReservedSeatsInput
  }

  export type EventSeatUncheckedCreateWithoutSeatInput = {
    id?: string
    eventId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type EventSeatCreateOrConnectWithoutSeatInput = {
    where: EventSeatWhereUniqueInput
    create: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput>
  }

  export type EventSeatCreateManySeatInputEnvelope = {
    data: EventSeatCreateManySeatInput | EventSeatCreateManySeatInput[]
  }

  export type TicketCreateWithoutSeatInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    buyer: UserCreateNestedOneWithoutPurchasedTicketsInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTicketsInput
  }

  export type TicketUncheckedCreateWithoutSeatInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutSeatInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput>
  }

  export type TicketCreateManySeatInputEnvelope = {
    data: TicketCreateManySeatInput | TicketCreateManySeatInput[]
  }

  export type VenueUpsertWithoutSeatsInput = {
    update: XOR<VenueUpdateWithoutSeatsInput, VenueUncheckedUpdateWithoutSeatsInput>
    create: XOR<VenueCreateWithoutSeatsInput, VenueUncheckedCreateWithoutSeatsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutSeatsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutSeatsInput, VenueUncheckedUpdateWithoutSeatsInput>
  }

  export type VenueUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    events?: EventUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type EventSeatUpsertWithWhereUniqueWithoutSeatInput = {
    where: EventSeatWhereUniqueInput
    update: XOR<EventSeatUpdateWithoutSeatInput, EventSeatUncheckedUpdateWithoutSeatInput>
    create: XOR<EventSeatCreateWithoutSeatInput, EventSeatUncheckedCreateWithoutSeatInput>
  }

  export type EventSeatUpdateWithWhereUniqueWithoutSeatInput = {
    where: EventSeatWhereUniqueInput
    data: XOR<EventSeatUpdateWithoutSeatInput, EventSeatUncheckedUpdateWithoutSeatInput>
  }

  export type EventSeatUpdateManyWithWhereWithoutSeatInput = {
    where: EventSeatScalarWhereInput
    data: XOR<EventSeatUpdateManyMutationInput, EventSeatUncheckedUpdateManyWithoutSeatInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutSeatInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSeatInput, TicketUncheckedUpdateWithoutSeatInput>
    create: XOR<TicketCreateWithoutSeatInput, TicketUncheckedCreateWithoutSeatInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSeatInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSeatInput, TicketUncheckedUpdateWithoutSeatInput>
  }

  export type TicketUpdateManyWithWhereWithoutSeatInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSeatInput>
  }

  export type UserCreateWithoutOrganizedEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateWithoutOrganizedEventsInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutOrganizedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
  }

  export type VenueCreateWithoutEventsInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    seats?: SeatCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    address: string
    hasAssignedSeats?: boolean
    totalCapacity: number
    seats?: SeatUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutEventsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
  }

  export type EventSeatCreateWithoutEventInput = {
    id?: string
    status?: string
    reservationExpiresAt?: Date | string | null
    seat: SeatCreateNestedOneWithoutEventSeatsInput
    reservedBy?: UserCreateNestedOneWithoutReservedSeatsInput
  }

  export type EventSeatUncheckedCreateWithoutEventInput = {
    id?: string
    seatId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type EventSeatCreateOrConnectWithoutEventInput = {
    where: EventSeatWhereUniqueInput
    create: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput>
  }

  export type EventSeatCreateManyEventInputEnvelope = {
    data: EventSeatCreateManyEventInput | EventSeatCreateManyEventInput[]
  }

  export type EventGatekeeperCreateWithoutEventInput = {
    id?: string
    assignedAt?: Date | string
    gatekeeper: UserCreateNestedOneWithoutGatekeeperAssignmentsInput
  }

  export type EventGatekeeperUncheckedCreateWithoutEventInput = {
    id?: string
    gatekeeperId: string
    assignedAt?: Date | string
  }

  export type EventGatekeeperCreateOrConnectWithoutEventInput = {
    where: EventGatekeeperWhereUniqueInput
    create: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput>
  }

  export type EventGatekeeperCreateManyEventInputEnvelope = {
    data: EventGatekeeperCreateManyEventInput | EventGatekeeperCreateManyEventInput[]
  }

  export type TicketTypeCreateWithoutEventInput = {
    id?: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
    tickets?: TicketCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeCreateManyEventInputEnvelope = {
    data: TicketTypeCreateManyEventInput | TicketTypeCreateManyEventInput[]
  }

  export type TicketCreateWithoutEventInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    buyer: UserCreateNestedOneWithoutPurchasedTicketsInput
    seat?: SeatCreateNestedOneWithoutTicketsInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTicketsInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
  }

  export type UserUpsertWithoutOrganizedEventsInput = {
    update: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type UserUpdateWithoutOrganizedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type VenueUpsertWithoutEventsInput = {
    update: XOR<VenueUpdateWithoutEventsInput, VenueUncheckedUpdateWithoutEventsInput>
    create: XOR<VenueCreateWithoutEventsInput, VenueUncheckedCreateWithoutEventsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutEventsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutEventsInput, VenueUncheckedUpdateWithoutEventsInput>
  }

  export type VenueUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    seats?: SeatUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hasAssignedSeats?: BoolFieldUpdateOperationsInput | boolean
    totalCapacity?: IntFieldUpdateOperationsInput | number
    seats?: SeatUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type EventSeatUpsertWithWhereUniqueWithoutEventInput = {
    where: EventSeatWhereUniqueInput
    update: XOR<EventSeatUpdateWithoutEventInput, EventSeatUncheckedUpdateWithoutEventInput>
    create: XOR<EventSeatCreateWithoutEventInput, EventSeatUncheckedCreateWithoutEventInput>
  }

  export type EventSeatUpdateWithWhereUniqueWithoutEventInput = {
    where: EventSeatWhereUniqueInput
    data: XOR<EventSeatUpdateWithoutEventInput, EventSeatUncheckedUpdateWithoutEventInput>
  }

  export type EventSeatUpdateManyWithWhereWithoutEventInput = {
    where: EventSeatScalarWhereInput
    data: XOR<EventSeatUpdateManyMutationInput, EventSeatUncheckedUpdateManyWithoutEventInput>
  }

  export type EventGatekeeperUpsertWithWhereUniqueWithoutEventInput = {
    where: EventGatekeeperWhereUniqueInput
    update: XOR<EventGatekeeperUpdateWithoutEventInput, EventGatekeeperUncheckedUpdateWithoutEventInput>
    create: XOR<EventGatekeeperCreateWithoutEventInput, EventGatekeeperUncheckedCreateWithoutEventInput>
  }

  export type EventGatekeeperUpdateWithWhereUniqueWithoutEventInput = {
    where: EventGatekeeperWhereUniqueInput
    data: XOR<EventGatekeeperUpdateWithoutEventInput, EventGatekeeperUncheckedUpdateWithoutEventInput>
  }

  export type EventGatekeeperUpdateManyWithWhereWithoutEventInput = {
    where: EventGatekeeperScalarWhereInput
    data: XOR<EventGatekeeperUpdateManyMutationInput, EventGatekeeperUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketTypeUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    update: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    data: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
  }

  export type TicketTypeUpdateManyWithWhereWithoutEventInput = {
    where: TicketTypeScalarWhereInput
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketTypeScalarWhereInput = {
    AND?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    OR?: TicketTypeScalarWhereInput[]
    NOT?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    id?: StringFilter<"TicketType"> | string
    eventId?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    price?: FloatFilter<"TicketType"> | number
    description?: StringNullableFilter<"TicketType"> | string | null
    quantityAvailable?: IntFilter<"TicketType"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutEventSeatsInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    venue: VenueCreateNestedOneWithoutEventsInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventSeatsInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventSeatsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventSeatsInput, EventUncheckedCreateWithoutEventSeatsInput>
  }

  export type SeatCreateWithoutEventSeatsInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    venue: VenueCreateNestedOneWithoutSeatsInput
    tickets?: TicketCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutEventSeatsInput = {
    id?: string
    venueId: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    tickets?: TicketUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutEventSeatsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutEventSeatsInput, SeatUncheckedCreateWithoutEventSeatsInput>
  }

  export type UserCreateWithoutReservedSeatsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateWithoutReservedSeatsInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutReservedSeatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservedSeatsInput, UserUncheckedCreateWithoutReservedSeatsInput>
  }

  export type EventUpsertWithoutEventSeatsInput = {
    update: XOR<EventUpdateWithoutEventSeatsInput, EventUncheckedUpdateWithoutEventSeatsInput>
    create: XOR<EventCreateWithoutEventSeatsInput, EventUncheckedCreateWithoutEventSeatsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventSeatsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventSeatsInput, EventUncheckedUpdateWithoutEventSeatsInput>
  }

  export type EventUpdateWithoutEventSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type SeatUpsertWithoutEventSeatsInput = {
    update: XOR<SeatUpdateWithoutEventSeatsInput, SeatUncheckedUpdateWithoutEventSeatsInput>
    create: XOR<SeatCreateWithoutEventSeatsInput, SeatUncheckedCreateWithoutEventSeatsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutEventSeatsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutEventSeatsInput, SeatUncheckedUpdateWithoutEventSeatsInput>
  }

  export type SeatUpdateWithoutEventSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    venue?: VenueUpdateOneRequiredWithoutSeatsNestedInput
    tickets?: TicketUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutEventSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type UserUpsertWithoutReservedSeatsInput = {
    update: XOR<UserUpdateWithoutReservedSeatsInput, UserUncheckedUpdateWithoutReservedSeatsInput>
    create: XOR<UserCreateWithoutReservedSeatsInput, UserUncheckedCreateWithoutReservedSeatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservedSeatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservedSeatsInput, UserUncheckedUpdateWithoutReservedSeatsInput>
  }

  export type UserUpdateWithoutReservedSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReservedSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type EventCreateWithoutGatekeepersInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    venue: VenueCreateNestedOneWithoutEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutGatekeepersInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGatekeepersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGatekeepersInput, EventUncheckedCreateWithoutGatekeepersInput>
  }

  export type UserCreateWithoutGatekeeperAssignmentsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateWithoutGatekeeperAssignmentsInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutGatekeeperAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGatekeeperAssignmentsInput, UserUncheckedCreateWithoutGatekeeperAssignmentsInput>
  }

  export type EventUpsertWithoutGatekeepersInput = {
    update: XOR<EventUpdateWithoutGatekeepersInput, EventUncheckedUpdateWithoutGatekeepersInput>
    create: XOR<EventCreateWithoutGatekeepersInput, EventUncheckedCreateWithoutGatekeepersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGatekeepersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGatekeepersInput, EventUncheckedUpdateWithoutGatekeepersInput>
  }

  export type EventUpdateWithoutGatekeepersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutGatekeepersInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutGatekeeperAssignmentsInput = {
    update: XOR<UserUpdateWithoutGatekeeperAssignmentsInput, UserUncheckedUpdateWithoutGatekeeperAssignmentsInput>
    create: XOR<UserCreateWithoutGatekeeperAssignmentsInput, UserUncheckedCreateWithoutGatekeeperAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGatekeeperAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGatekeeperAssignmentsInput, UserUncheckedUpdateWithoutGatekeeperAssignmentsInput>
  }

  export type UserUpdateWithoutGatekeeperAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGatekeeperAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type EventCreateWithoutTicketTypesInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    venue: VenueCreateNestedOneWithoutEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketTypesInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketTypesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
  }

  export type TicketCreateWithoutTicketTypeInput = {
    id?: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
    event: EventCreateNestedOneWithoutTicketsInput
    buyer: UserCreateNestedOneWithoutPurchasedTicketsInput
    seat?: SeatCreateNestedOneWithoutTicketsInput
    validatedBy?: UserCreateNestedOneWithoutValidatedTicketsInput
  }

  export type TicketUncheckedCreateWithoutTicketTypeInput = {
    id?: string
    eventId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type TicketCreateManyTicketTypeInputEnvelope = {
    data: TicketCreateManyTicketTypeInput | TicketCreateManyTicketTypeInput[]
  }

  export type EventUpsertWithoutTicketTypesInput = {
    update: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketTypesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type EventUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
  }

  export type TicketUpdateManyWithWhereWithoutTicketTypeInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type EventCreateWithoutTicketsInput = {
    id?: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    venue: VenueCreateNestedOneWithoutEventsInput
    eventSeats?: EventSeatCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: string
    organizerId: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutEventInput
    gatekeepers?: EventGatekeeperUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type TicketTypeCreateWithoutTicketsInput = {
    id?: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
    event: EventCreateNestedOneWithoutTicketTypesInput
  }

  export type TicketTypeUncheckedCreateWithoutTicketsInput = {
    id?: string
    eventId: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
  }

  export type TicketTypeCreateOrConnectWithoutTicketsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutPurchasedTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    validatedTickets?: TicketCreateNestedManyWithoutValidatedByInput
  }

  export type UserUncheckedCreateWithoutPurchasedTicketsInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    validatedTickets?: TicketUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutPurchasedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasedTicketsInput, UserUncheckedCreateWithoutPurchasedTicketsInput>
  }

  export type SeatCreateWithoutTicketsInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    venue: VenueCreateNestedOneWithoutSeatsInput
    eventSeats?: EventSeatCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutTicketsInput = {
    id?: string
    venueId: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
    eventSeats?: EventSeatUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutTicketsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutTicketsInput, SeatUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutValidatedTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutValidatedTicketsInput = {
    id?: string
    roleId: number
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    gatekeeperAssignments?: EventGatekeeperUncheckedCreateNestedManyWithoutGatekeeperInput
    reservedSeats?: EventSeatUncheckedCreateNestedManyWithoutReservedByInput
    purchasedTickets?: TicketUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutValidatedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidatedTicketsInput, UserUncheckedCreateWithoutValidatedTicketsInput>
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketTypeUpsertWithoutTicketsInput = {
    update: XOR<TicketTypeUpdateWithoutTicketsInput, TicketTypeUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutTicketsInput, TicketTypeUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketTypeUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutPurchasedTicketsInput = {
    update: XOR<UserUpdateWithoutPurchasedTicketsInput, UserUncheckedUpdateWithoutPurchasedTicketsInput>
    create: XOR<UserCreateWithoutPurchasedTicketsInput, UserUncheckedCreateWithoutPurchasedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasedTicketsInput, UserUncheckedUpdateWithoutPurchasedTicketsInput>
  }

  export type UserUpdateWithoutPurchasedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type SeatUpsertWithoutTicketsInput = {
    update: XOR<SeatUpdateWithoutTicketsInput, SeatUncheckedUpdateWithoutTicketsInput>
    create: XOR<SeatCreateWithoutTicketsInput, SeatUncheckedCreateWithoutTicketsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutTicketsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutTicketsInput, SeatUncheckedUpdateWithoutTicketsInput>
  }

  export type SeatUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    venue?: VenueUpdateOneRequiredWithoutSeatsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type UserUpsertWithoutValidatedTicketsInput = {
    update: XOR<UserUpdateWithoutValidatedTicketsInput, UserUncheckedUpdateWithoutValidatedTicketsInput>
    create: XOR<UserCreateWithoutValidatedTicketsInput, UserUncheckedCreateWithoutValidatedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidatedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidatedTicketsInput, UserUncheckedUpdateWithoutValidatedTicketsInput>
  }

  export type UserUpdateWithoutValidatedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutValidatedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    cpf: string
    phone?: string | null
    birthDate?: string | null
    profilePictureUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    gatekeeperAssignments?: EventGatekeeperUncheckedUpdateManyWithoutGatekeeperNestedInput
    reservedSeats?: EventSeatUncheckedUpdateManyWithoutReservedByNestedInput
    purchasedTickets?: TicketUncheckedUpdateManyWithoutBuyerNestedInput
    validatedTickets?: TicketUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    venueId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type EventGatekeeperCreateManyGatekeeperInput = {
    id?: string
    eventId: string
    assignedAt?: Date | string
  }

  export type EventSeatCreateManyReservedByInput = {
    id?: string
    eventId: string
    seatId: string
    status?: string
    reservationExpiresAt?: Date | string | null
  }

  export type TicketCreateManyBuyerInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketCreateManyValidatedByInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    purchasedAt?: Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGatekeeperUpdateWithoutGatekeeperInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGatekeepersNestedInput
  }

  export type EventGatekeeperUncheckedUpdateWithoutGatekeeperInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGatekeeperUncheckedUpdateManyWithoutGatekeeperInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSeatUpdateWithoutReservedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutEventSeatsNestedInput
    seat?: SeatUpdateOneRequiredWithoutEventSeatsNestedInput
  }

  export type EventSeatUncheckedUpdateWithoutReservedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventSeatUncheckedUpdateManyWithoutReservedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    seat?: SeatUpdateOneWithoutTicketsNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput
    seat?: SeatUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatCreateManyVenueInput = {
    id?: string
    rowLabel: string
    seatNumber: number
    gridX: number
    gridY: number
    seatType?: string
  }

  export type EventCreateManyVenueInput = {
    id?: string
    organizerId: string
    title: string
    description?: string | null
    bannerUrl?: string | null
    eventType: string
    startTime: Date | string
    externalApiSource?: string | null
    externalApiId?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type SeatUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    eventSeats?: EventSeatUpdateManyWithoutSeatNestedInput
    tickets?: TicketUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutSeatNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowLabel?: StringFieldUpdateOperationsInput | string
    seatNumber?: IntFieldUpdateOperationsInput | number
    gridX?: IntFieldUpdateOperationsInput | number
    gridY?: IntFieldUpdateOperationsInput | number
    seatType?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    eventSeats?: EventSeatUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventSeats?: EventSeatUncheckedUpdateManyWithoutEventNestedInput
    gatekeepers?: EventGatekeeperUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    externalApiSource?: NullableStringFieldUpdateOperationsInput | string | null
    externalApiId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSeatCreateManySeatInput = {
    id?: string
    eventId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type TicketCreateManySeatInput = {
    id?: string
    eventId: string
    ticketTypeId: string
    buyerId: string
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type EventSeatUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutEventSeatsNestedInput
    reservedBy?: UserUpdateOneWithoutReservedSeatsNestedInput
  }

  export type EventSeatUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventSeatUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSeatCreateManyEventInput = {
    id?: string
    seatId: string
    status?: string
    reservedById?: string | null
    reservationExpiresAt?: Date | string | null
  }

  export type EventGatekeeperCreateManyEventInput = {
    id?: string
    gatekeeperId: string
    assignedAt?: Date | string
  }

  export type TicketTypeCreateManyEventInput = {
    id?: string
    name: string
    price: number
    description?: string | null
    quantityAvailable: number
  }

  export type TicketCreateManyEventInput = {
    id?: string
    ticketTypeId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type EventSeatUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seat?: SeatUpdateOneRequiredWithoutEventSeatsNestedInput
    reservedBy?: UserUpdateOneWithoutReservedSeatsNestedInput
  }

  export type EventSeatUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventSeatUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reservedById?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventGatekeeperUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatekeeper?: UserUpdateOneRequiredWithoutGatekeeperAssignmentsNestedInput
  }

  export type EventGatekeeperUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    gatekeeperId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventGatekeeperUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    gatekeeperId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantityAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput
    seat?: SeatUpdateOneWithoutTicketsNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTicketTypeInput = {
    id?: string
    eventId: string
    buyerId: string
    seatId?: string | null
    buyerName: string
    accessCode: string
    qrCodeToken: string
    shareToken: string
    status?: string
    validatedAt?: Date | string | null
    validatedById?: string | null
    purchasedAt?: Date | string
  }

  export type TicketUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTicketsNestedInput
    buyer?: UserUpdateOneRequiredWithoutPurchasedTicketsNestedInput
    seat?: SeatUpdateOneWithoutTicketsNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    seatId?: NullableStringFieldUpdateOperationsInput | string | null
    buyerName?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    qrCodeToken?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}