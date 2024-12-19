import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { CreateSubscriptionDto, UpdateSubscriptionDto } from "../dtos";
import { Subscription } from "src/domain/entities";

@Injectable()
export class SubscriptionFactory {
    createNewSubscription({ adminId, userNumber, price, startDate, endDate,currency,phoneNumber }: CreateSubscriptionDto): Subscription {
        const newSubscription = new Subscription();
        newSubscription.phoneNumber = phoneNumber;
        newSubscription.currency = currency;
        newSubscription._id = new Types.ObjectId();
        newSubscription.adminId = adminId;
        newSubscription.userNumber = userNumber || 10;
        newSubscription.price = price ;
        newSubscription.startDate = new Date(startDate);
        newSubscription.endDate = new Date(endDate);
        newSubscription.isDeleted = false;
        newSubscription.createdAt = new Date();
        newSubscription.updatedAt = new Date();

        return newSubscription;
    }

    updateSubscription({ adminId, userNumber, price, startDate, endDate,phoneNumber,currency }: UpdateSubscriptionDto): Subscription {
        const updatedSubscription = new Subscription();

        if (adminId) updatedSubscription.adminId = adminId;
        if (phoneNumber) updatedSubscription.phoneNumber = phoneNumber;
        if (currency) updatedSubscription.currency = currency;
        if (userNumber) updatedSubscription.userNumber = userNumber;
        if (price) updatedSubscription.price = price;
        if (startDate) updatedSubscription.startDate = new Date(startDate);
        if (endDate) updatedSubscription.endDate = new Date(endDate);

        updatedSubscription.updatedAt = new Date();

        return updatedSubscription;
    }
}